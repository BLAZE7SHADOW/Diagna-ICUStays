/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeValue = getTypeFromPath();
  const [data, setData] = useState([]);
  const [dateRange, setDateRange] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        // setError(err);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchDateRange();
    fetchDataFromApi();
  }, [apiEndpoint]);

  const disabledDate = (current) => {
    if (!dateRange.start_time || !dateRange.end_time) return true; // Disable all dates if range is undefined

    const start = dayjs.utc(dateRange.start_time);
    const end = dayjs.utc(dateRange.end_time);

    return current.isBefore(start, "day") || current.isAfter(end, "day");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <DatePicker
        disabledDate={disabledDate}
        defaultValue={
          dateRange.start_time ? dayjs.utc(dateRange.start_time) : null
        } // Show the start date initially if available
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
