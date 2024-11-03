import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { Layout } from "antd";
export default function AppHeader() {
  const { Header } = Layout;
  return (
    <Header style={{ background: "white", paddingInline: "20px" }}>
      <Row justify={"space-between"} align={"middle"} style={{ minHeight: 64 }}>
        <Col style={{ height: 30 }}>
          <Link to="/">
            <img src="" alt="Diagna Logo" style={{ maxHeight: 40 }} />
          </Link>
        </Col>
      </Row>
    </Header>
  );
}
