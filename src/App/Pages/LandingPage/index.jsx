import { useState } from "react";
import { useQuery } from "react-query";
import { List, Card, Pagination, Spin, Typography } from "antd";
import { getAllStays } from "../../../services";
import { formatDate, formatLOS } from "../../../Utils/functions";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const LandingPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { isLoading, error, data } = useQuery({
    queryKey: ["stays", currentPage, pageSize],
    queryFn: () => getAllStays(currentPage, pageSize),
  });

  const handlePageChange = (page, pagesize) => {
    setPageSize(pagesize);
    setCurrentPage(page);
  };

  console.log(data, "data");

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Patient ICU Stays Dashboard</Title>
      {isLoading ? (
        <div className="spinner-wrapper">
          <Spin />
        </div>
      ) : error ? (
        <div>Error loading data: {error.message}</div>
      ) : (
        <>
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={<Title level={4}>Patient ID: {item.subject_id}</Title>}
                  extra={<a href={`/patients/${item.stay_id}`}>View Details</a>}
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={() =>
                    navigate(
                      `/patients?stayId=${encodeURIComponent(
                        item.stay_id
                      )}&lastDate=${
                        item.outtime
                          ? dayjs(item.outtime).format("YYYY-MM-DD")
                          : ""
                      }`
                    )
                  }
                >
                  <div>
                    <Text strong>Admission ID: </Text>
                    <Text>{item.hadm_id}</Text>
                  </div>
                  <div>
                    <Text strong>Stay ID: </Text>
                    <Text>{item.stay_id}</Text>
                  </div>
                  <div>
                    <Text strong>First Care Unit: </Text>
                    <Text>{item.first_careunit}</Text>
                  </div>
                  <div>
                    <Text strong>Last Care Unit: </Text>
                    <Text>{item.last_careunit}</Text>
                  </div>
                  <div>
                    <Text strong>Admission Date: </Text>
                    <Text>{formatDate(item?.intime)}</Text>
                  </div>
                  <div>
                    <Text strong>Discharge Date: </Text>
                    <Text>{formatDate(item?.outtime)}</Text>
                  </div>
                  <div>
                    <Text strong>Length of Stay (days): </Text>
                    <Text>{formatLOS(item?.los)}</Text>
                  </div>
                </Card>
              </List.Item>
            )}
          />
          <Pagination
            showQuickJumper
            current={currentPage}
            pageSize={pageSize}
            total={140}
            onChange={handlePageChange}
            style={{ marginTop: "20px", textAlign: "center" }}
          />
        </>
      )}
    </div>
  );
};

export default LandingPage;
