import {Button, Col, Row} from "antd";

export default function InfiniteLoadingButton({loaderFunction, loadingState, disabled}) {
  return <Row justify={"space-around"} style={{marginTop: 8}}>
    <Col>
      <Button type={"primary"} loading={loadingState} onClick={loaderFunction}
              disabled={disabled}>{loadingState ? "Loading..." : "Load More"}</Button>
    </Col>
  </Row>
}