import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fetchData, geStayDetails } from "../../services";
import PropTypes from "prop-types";
import {
  Col,
  Row,
  Skeleton,
  Table,
  Tabs,
  Typography,
  message,
} from "antd";
import {
  capitalizeFirstLetter,
  extractSelectedParams,
  getTypeFromPath,
  queryParams,
} from "../../Utils/functions";
import { API_ROUTES } from "../../constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import StayDetailComponent from "../StayDetailComponent";
import StayDetailsSkeleton from "./StayDetailSkeleton";
import DynamicContentSkeleton from "./DynamicContentSkeleton";
dayjs.extend(utc);

const { Title } = Typography;
const { TabPane } = Tabs;
function DynamicContent({ apiEndpoint, columns, params, type = "" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const typeValue = getTypeFromPath();

  const [data, setData] = useState([]);
  const [stayData, setStayData] = useState([]);
  const [stayDataLoading, setStayDataLoading] = useState(false);
  const [dateRange, setDateRange] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDate, setSelectedDate] = useState(
    searchParams.get("date")
      ? dayjs(searchParams.get("date"), "YYYY-MM-DD")
      : null
  );
  const stayId = searchParams.get("stay_id");

  const fetchStayDetail = async () => {
    setStayDataLoading(true);
    try {
      const stayUrl = `?stay_id=${stayId}`;
      const result = await geStayDetails(stayUrl);
      setStayData(result?.[0]);
    } catch (err) {
      message.error(`Unable to fetch Stay Details : ${err} !`);
    } finally {
      setStayDataLoading(false);
    }
  };

  const filteredParamsForRange = extractSelectedParams(
    searchParams,
    ["stay_id"],
    {}
  );
  if (typeValue) {
    filteredParamsForRange.set("table_name", typeValue);
  }
  const filteredParamsForApiEndPoint = extractSelectedParams(
    searchParams,
    params
  );

  const skeletonData = Array(4).fill({});

  const queryParamsToAdd = queryParams(filteredParamsForApiEndPoint);

  const fetchDataFromApi = async (queryString = "") => {
    setIsLoading(true);
    setError(null);

    const urlWithParams =
      queryParamsToAdd || queryString
        ? `${apiEndpoint}${apiEndpoint.includes("?") ? "&" : "?"}${
            queryString || queryParamsToAdd
          }`
        : apiEndpoint;
    try {
      const result = await fetchData(urlWithParams);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getDataOnDateChange = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      searchParams.set("date", formattedDate);
    } else {
      searchParams.delete("date");
    }
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });

    fetchDataFromApi(searchParams.toString());
  };

  useEffect(() => {
    fetchStayDetail();
  }, [stayId]);

  useEffect(() => {
    const missingParams = params?.filter(
      (param) => !searchParams.has(param) || !searchParams.get(param)
    );
    if (missingParams.length > 0) {
      message.error("Something required is missing in the search params !");
      window.location.replace("/");
    }
  }, []);

  useEffect(() => {
    const fetchDateRange = async () => {
      const queryString = queryParams(filteredParamsForRange);
      const urlWithParams = `${API_ROUTES.GET_DATE_RANGE}?${queryString}`;
      try {
        const result = await fetchData(urlWithParams);
        setDateRange(result);
      } catch (err) {
        message.error(`Unable to fetch the Date Range :  ${err}!`);
      }
    };

    fetchDateRange();
    fetchDataFromApi();
  }, [apiEndpoint]);

  useEffect(() => {
    getDataOnDateChange();
  }, [selectedDate]);

  // if (isLoading) return <DynamicContentSkeleton />;
  if (error) return <div>Error: {error.message}</div>;

  const startDate = dayjs.utc(dateRange.start_time);
  const endDate = dayjs.utc(dateRange.end_time);
  const tabs = [];

  for (
    let date = startDate, dayCount = 1;
    date.isBefore(endDate.add(1, "day"), "day");
    date = date.add(1, "day"), dayCount++
  ) {
    tabs.push({
      key: date.format("YYYY-MM-DD"),
      label: `Day ${dayCount} (${date.format("DD MMM YYYY")})`,
      date: date,
    });
  }

  return (
    <>
      <Row gutter={[16, 16]} style={{ margin: "10px", marginBottom: "20px" }}>
        <Col span={24}>
          {stayDataLoading ? (
            <StayDetailsSkeleton />
          ) : (
            <StayDetailComponent item={stayData} />
          )}
        </Col>
        <Col span={24}>
          <Tabs
            activeKey={selectedDate.format("YYYY-MM-DD")}
            defaultActiveKey={tabs[tabs.length - 1].key}
            onChange={(key) => {
              const selected = dayjs.utc(key);
              setSelectedDate(selected);
            }}
            style={{ marginBottom: 5 }}
          >
            {tabs.map((tab) => (
              <TabPane tab={tab.label} key={tab.key} />
            ))}
          </Tabs>
        </Col>
      </Row>

      <Title style={{ paddingInline: "18px" }} level={3}>
        {`${capitalizeFirstLetter(typeValue)}${" "}${type} Details`}
      </Title>

      {isLoading ? (
        <DynamicContentSkeleton />
      ) : (
        <Table
          columns={isLoading ? skeletonData : columns}
          rowKey={(record, index) => `${record.subject_id}-${index}`}
          pagination={{ pageSize: 10 }}
          dataSource={isLoading ? skeletonData : data}
          loading={{
            spinning: isLoading,
            indicator: (
              <Skeleton
                active
                title={false}
                paragraph={{
                  rows: 1,
                  width: ["20%", "20%", "30%", "20%", "10%"],
                }}
              />
            ),
          }}
        />
      )}
    </>
  );
}

DynamicContent.propTypes = {
  apiEndpoint: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  params: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string,
};

export default DynamicContent;
