/* eslint-disable react/prop-types */
import { Row, Col, Typography } from "antd";
import { formatDate, formatLOS } from "../../Utils/functions";
const { Text, Title } = Typography;

const StayDetailComponent = ({ item = {} }) => {
  return (
    <div>
      <Title level={4}>Patient Stay Details (#{item.stay_id})</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text strong>Admission ID: </Text>
          <Text>{item.hadm_id}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Length of Stay (days): </Text>
          <Text>{formatLOS(item.los)}</Text>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Text strong>First Care Unit: </Text>
          <Text>{item.first_careunit}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Last Care Unit: </Text>
          <Text>{item.last_careunit}</Text>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Text strong>Admission Date: </Text>
          <Text>{formatDate(item.intime)}</Text>
        </Col>
        <Col span={12}>
          <Text strong>Discharge Date: </Text>
          <Text>{formatDate(item.outtime)}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default StayDetailComponent;
