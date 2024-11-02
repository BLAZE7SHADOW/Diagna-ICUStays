import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { fetchData } from "../../services";
import { DatePicker, Table } from "antd";
import {
  extractSelectedParams,
  getTypeFromPath,
  queryParams,
} from "../../Utils/functions";
import { API_ROUTES } from "../../constants";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function DynamicContent({ apiEndpoint, columns, params }) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeValue = getTypeFromPath();
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    searchParams.get("date")
      ? dayjs(searchParams.get("date"), "YYYY-MM-DD")
      : null
  );

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

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setError(null);
      const queryParamsToAdd = queryParams(filteredParamsForApiEndPoint);
      const urlWithParams = queryParamsToAdd
        ? `${apiEndpoint}${
            apiEndpoint.includes("?") ? "&" : "?"
          }${queryParamsToAdd}`
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

  useEffect(() => {
    // Update URL and fetch data when selectedDate changes
    if (selectedDate) {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      searchParams.set("date", formattedDate);
    } else {
      searchParams.delete("date");
    }
    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });

    // Fetch data based on the new date
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setError(null);
      const queryParamsToAdd = queryParams(filteredParamsForApiEndPoint);
      const urlWithParams = queryParamsToAdd
        ? `${apiEndpoint}${
            apiEndpoint.includes("?") ? "&" : "?"
          }${queryParamsToAdd}`
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

    fetchDataFromApi();
  }, [selectedDate]); // Only re-run when `selectedDate` changes

  const disabledDate = (current) => {
    if (!dateRange.start_time || !dateRange.end_time) return true;
    const start = dayjs.utc(dateRange.start_time);
    const end = dayjs.utc(dateRange.end_time);
    return current.isBefore(start, "day") || current.isAfter(end, "day");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // Only update `selectedDate` state here
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <DatePicker
        disabledDate={disabledDate}
        onChange={handleDateChange}
        value={selectedDate} // Bind `DatePicker` to `selectedDate`
        style={{ marginBottom: 16 }}
      />
      <Table
        dataSource={data}
        columns={columns}
        loading={isLoading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default DynamicContent;
