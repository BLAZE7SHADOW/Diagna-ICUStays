/* eslint-disable react/prop-types */
import { Row, Col, Typography } from "antd";
import { formatDate, formatLOS } from "../../Utils/functions";
import {
  AuditOutlined,
  CalendarOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const StayDetailComponent = ({ item = {} }) => {
  return (
    <div>
      <Title level={4} style={{ marginBottom: "10px" }}>
        Patient Stay Details{" "}
        <Title
          level={4}
          style={{ margin: 0, color: "#1890ff", display: "inline" }}
        >
          #{item.stay_id}
        </Title>
      </Title>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <UserOutlined style={{ marginRight: "10px" }} />
          <Text strong>Admission ID: </Text>
          <Text>{item.hadm_id}</Text>
        </Col>
        <Col span={12}>
          <CalendarOutlined style={{ marginRight: "10px" }} />
          <Text strong>Length of Stay (days): </Text>
          <Text>{formatLOS(item.los)}</Text>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <AuditOutlined style={{ marginRight: "10px" }} />
          <Text strong>First Care Unit: </Text>
          <Text>{item.first_careunit}</Text>
        </Col>
        <Col span={12}>
          <AuditOutlined style={{ marginRight: "10px" }} />
          <Text strong>Last Care Unit: </Text>
          <Text>{item.last_careunit}</Text>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <LoginOutlined style={{ marginRight: "10px" }} />
          <Text strong>Admission Date: </Text>
          <Text>{formatDate(item.intime)}</Text>
        </Col>
        <Col span={12}>
          <LogoutOutlined style={{ marginRight: "10px" }} />
          <Text strong>Discharge Date: </Text>
          <Text>{formatDate(item.outtime)}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default StayDetailComponent;
