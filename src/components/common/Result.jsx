import PropTypes from "prop-types";
import { Row, Col, Typography } from "antd";
const { Title, Text } = Typography;

function Result({ icon, title, description, extra }) {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={5} md={2}>
        {icon}
      </Col>
      <Col xs={19} md={22}>
        <Title level={4} style={{ marginBottom: "8px" }}>
          {title}
        </Title>
        <Text>{description}</Text>
        {extra}
      </Col>
    </Row>
  );
}

Result.propTypes = {
  icon: PropTypes.element.isRequired, // icon should be a React element
  title: PropTypes.string.isRequired, // title should be a string
  description: PropTypes.string, // description should be a string (optional)
  extra: PropTypes.node, // extra should be a React node (optional)
};

export default Result;
