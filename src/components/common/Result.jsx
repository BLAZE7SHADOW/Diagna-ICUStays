import { Row, Col, Typography } from 'antd';
const { Title, Text } = Typography;

function Result({ icon, title, description, extra }) {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={5} md={2}>
        {icon}
      </Col>
      <Col xs={19} md={22}>
        <Title level={4} style={{ marginBottom: '8px' }}>{title}</Title>
        <Text>{description}</Text>
        {extra}
      </Col>
    </Row>
  );
}

export default Result;
