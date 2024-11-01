/* eslint-disable react/prop-types */
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { fetchData } from "../../services";
import { Table } from "antd";

function DynamicContent({ apiEndpoint, columns }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const stayId = params.get("stayId");
  // const date = params.get("date");
  // const type = params.get("type");
  // const section = params.get("section");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setError(null);

      const queryParams = Array.from(params.entries())
        .filter(([key, value]) => key && value) // Exclude empty keys or values
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      const urlWithParams = queryParams
        ? `${apiEndpoint}${apiEndpoint.includes("?") ? "&" : "?"}${queryParams}`
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
