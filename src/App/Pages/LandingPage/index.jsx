import { useState } from "react";
import { useQuery } from "react-query";
import { List, Card, Pagination, Spin, Typography, Row, Col } from "antd";
import { getAllStays } from "../../../services";
import { formatDate, formatLOS } from "../../../Utils/functions";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ["stays", currentPage, pageSize],
    queryFn: () =>
      getAllStays({ page_number: currentPage, num_entries: pageSize }),
  });

  const handlePageChange = (page, pagesize) => {
    setPageSize(pagesize);
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div style={{ padding: "20px" }}>
        <div
          className="spinner-wrapper"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBlock: "100px",
          }}
        >
          <Spin />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px" }}>
        <div>Error loading data: {error.message}</div>;
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} md={12} style={{ textAlign: "start" }}>
          <Title level={2}>Patient ICU Stays Dashboard</Title>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <Pagination
            showQuickJumper
            current={currentPage}
            pageSize={pageSize}
            total={140}
            onChange={handlePageChange}
          />
        </Col>
      </Row>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={<Title level={4}>#{item.stay_id}</Title>}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() =>
                navigate(
                  `/neurology/gcs?stay_id=${encodeURIComponent(
                    item.stay_id
                  )}&date=${
                    item.outtime ? dayjs(item.outtime).format("YYYY-MM-DD") : ""
                  }`
                )
              }
            >
              <Row gutter={16}>
                <Col span={12}>
                  <Text strong>Admission ID: </Text>
                  <Text>{item.hadm_id}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Stay ID: </Text>
                  <Text>{item.stay_id}</Text>
                </Col>
                <Col span={8}>
                  <Text strong>First Care Unit: </Text>
                  <Text>{item.first_careunit}</Text>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Text strong>Last Care Unit: </Text>
                  <Text>{item.last_careunit}</Text>
                </Col>
                <Col span={8}>
                  <Text strong>Admission Date: </Text>
                  <Text>{formatDate(item?.intime)}</Text>
                </Col>
                <Col span={8}>
                  <Text strong>Discharge Date: </Text>
                  <Text>{formatDate(item?.outtime)}</Text>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Text strong>Length of Stay (days): </Text>
                  <Text>{formatLOS(item?.los)}</Text>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default LandingPage;
