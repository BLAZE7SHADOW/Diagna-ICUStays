import { useState } from "react";
import { useQuery } from "react-query";
import { List, Card, Pagination, Spin, Typography, Row, Col } from "antd";
import { getAllStays } from "../../../services";
import { formatDate, formatLOS } from "../../../Utils/functions";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import {
  AuditOutlined,
  CalendarOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} style={{ textAlign: "start" }}>
          <Title level={2}>Patient ICU Stays Dashboard</Title>
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
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
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CalendarOutlined
                    style={{ marginRight: "8px", color: "#1890ff" }}
                  />
                  <Title level={4} style={{ margin: 0, color: "#1890ff" }}>
                    Stay ID:
                  </Title>
                  <Title
                    level={4}
                    copyable
                    style={{ margin: 0, marginLeft: "8px", color: "#1890ff" }}
                  >
                    {item.stay_id}
                  </Title>
                </div>
              }
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
                <Col span={24}>
                  <UserOutlined style={{ marginRight: "10px" }} />
                  <Text strong>Admission ID: </Text>
                  <Text copyable>{item.hadm_id}</Text>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <AuditOutlined style={{ marginRight: "10px" }} />
                  <Text strong>First Care Unit: </Text>
                  <Text>{item.first_careunit}</Text>
                </Col>
                <Col span={24}>
                  <AuditOutlined style={{ marginRight: "10px" }} />

                  <Text strong>Last Care Unit: </Text>
                  <Text>{item.last_careunit}</Text>
                </Col>
                <Col span={24}>
                  <CalendarOutlined style={{ marginRight: "10px" }} />
                  <Text strong>Length of Stay (days): </Text>
                  <Text>{formatLOS(item?.los)}</Text>
                </Col>
                <Col span={12}>
                  <Row>
                    <LoginOutlined style={{ marginRight: "10px" }} />
                    <Text strong>Admission Date: </Text>
                    <Text>{formatDate(item?.intime)}</Text>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <LogoutOutlined style={{ marginRight: "10px" }} />
                    <Text strong>Discharge Date: </Text>
                    <Text>{formatDate(item?.outtime)}</Text>
                  </Row>
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
