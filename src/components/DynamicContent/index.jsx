import { useLocation, useNavigate } from "react-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { fetchData, geStayDetails } from "../../services";
import {
  Button,
  Col,
  DatePicker,
  message,
  Row,
  Skeleton,
  Table,
  Typography,
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
dayjs.extend(utc);

const { Title } = Typography;

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
      // setError(err);
    } finally {
      setStayDataLoading(false);
    }
  };

  useEffect(() => {
    fetchStayDetail();
  }, [stayId]);

  // Filtered parameters for date range API without 'type'
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

  useLayoutEffect(() => {
    const missingParams = params?.filter((param) => !searchParams.has(param));
    if (missingParams.length > 0) {
      // message.error("This is an error message");
      navigate("/");
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
        // Handle error if needed
      }
    };

    fetchDateRange();
    fetchDataFromApi();
  }, [apiEndpoint]);

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
    console.log(searchParams.toString(), "searchParams.toString()");

    fetchDataFromApi(searchParams.toString());
  };

  useEffect(() => {
    getDataOnDateChange();
  }, [selectedDate]);

  const disabledDate = (current) => {
    if (!dateRange.start_time || !dateRange.end_time) return true;
    const start = dayjs.utc(dateRange.start_time);
    const end = dayjs.utc(dateRange.end_time);
    return current.isBefore(start, "day") || current.isAfter(end, "day");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Row gutter={[16, 16]} style={{ margin: "10px", marginBottom: "20px" }}>
        <Col span={20}>
          <StayDetailComponent item={stayData} />
        </Col>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "25px",
          }}
        >
          <DatePicker
            disabledDate={disabledDate}
            onChange={handleDateChange}
            value={selectedDate}
          />
        </Col>
      </Row>

      <Title style={{ paddingInline: "18px" }} level={3}>
        {`${capitalizeFirstLetter(typeValue)}${" "}${type} Details`}
      </Title>

      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
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
    </>
  );
}

export default DynamicContent;
