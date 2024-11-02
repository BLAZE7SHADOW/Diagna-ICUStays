import { Col, Row, Spin } from 'antd'
import React from 'react'

const Loader = () => {
    return (
        <Col span={24}>
            <Row align={'middle'} justify={'center'} style={{ height: '100vh' }}>
                <Spin />
            </Row>
        </Col>
    )
}

export default Loader