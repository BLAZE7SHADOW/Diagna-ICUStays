import { Skeleton, Row, Col } from "antd";

const DynamicContentSkeleton = () => {
  return (
    <div>
      {/* Table Header */}
      <Row gutter={16}>
        <Col span={4}>
          <Skeleton.Input style={{ width: "100%" }} active size="small" />
        </Col>
        <Col span={4}>
          <Skeleton.Input style={{ width: "100%" }} active size="small" />
        </Col>
        <Col span={6}>
          <Skeleton.Input style={{ width: "100%" }} active size="small" />
        </Col>
        <Col span={6}>
          <Skeleton.Input style={{ width: "100%" }} active size="small" />
        </Col>
        <Col span={4}>
          <Skeleton.Input style={{ width: "100%" }} active size="small" />
        </Col>
      </Row>

      {/* Table Rows */}
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Row gutter={16} key={index} style={{ marginTop: 10 }}>
          <Col span={4}>
            <Skeleton.Input style={{ width: "100%" }} active size="small" />
          </Col>
          <Col span={4}>
            <Skeleton.Input style={{ width: "100%" }} active size="small" />
          </Col>
          <Col span={6}>
            <Skeleton.Input style={{ width: "100%" }} active size="small" />
          </Col>
          <Col span={6}>
            <Skeleton.Input style={{ width: "100%" }} active size="small" />
          </Col>
          <Col span={4}>
            <Skeleton.Input style={{ width: "100%" }} active size="small" />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default DynamicContentSkeleton;
