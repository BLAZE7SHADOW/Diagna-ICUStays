/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { fetchData } from "../../services";
import { Table } from "antd";
import {
  extractSelectedParams,
  getTypeFromPath,
  queryParams,
} from "../../Utils/functions";
import { API_ROUTES } from "../../constants";

function DynamicContent({ apiEndpoint, columns, params }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeValue = getTypeFromPath();
  searchParams.append("type", typeValue);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const filteredParamsForRange = extractSelectedParams(
    searchParams,
    ["stay_id", "type"],
    { type: "table_name" }
  );

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
      setIsLoading(true);
      setError(null);
      const queryString = queryParams(filteredParamsForRange);
      const urlWithParams = `${API_ROUTES.GET_DATE_RANGE}?${queryString}`;

      try {
        const result = await fetchData(urlWithParams);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDateRange();
    fetchDataFromApi();
  }, [apiEndpoint]); // Re-fetch if the apiEndpoint prop changes

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table
      dataSource={data}
      columns={columns}
      loading={isLoading}
      rowKey="id" // Assumes each data item has a unique 'id' field; adjust if different
      pagination={{ pageSize: 10 }} // Optional: Configure pagination
    />
  );
}

export default DynamicContent;
