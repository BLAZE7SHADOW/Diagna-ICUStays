import { Skeleton, Row, Col } from "antd";

const StayDetailsSkeleton = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Title Skeleton */}
      <Skeleton.Input
        active
        size="small"
        style={{ width: 250, marginBottom: 5 }}
      />

      <Row gutter={32} style={{ marginTop: 20 }}>
        {/* Left Column Skeleton */}
        <Col span={12}>
          <div style={{ marginBottom: 5 }}>
            <Skeleton.Input active size="small" style={{ width: 100 }} />
          </div>

          <div style={{ marginBottom: 5 }}>
            <Skeleton.Input active size="small" style={{ width: 300 }} />
          </div>
        </Col>

        {/* Right Column Skeleton */}
        <Col span={12}>
          <div style={{ marginBottom: 5 }}>
            <Skeleton.Input active size="small" style={{ width: 50 }} />
          </div>

          <div style={{ marginBottom: 5 }}>
            <Skeleton.Input active size="small" style={{ width: 300 }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StayDetailsSkeleton;
