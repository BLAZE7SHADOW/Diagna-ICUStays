import { Button, Result } from 'antd'
import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <Result
            status={'error'}
            title="404 Not Found"
            subTitle="The requested URL does not exist"
            extra={[<Button type='primary' icon={<ArrowLeftOutlined />} onClick={() => navigate('/')}>Tenant Dashboard</Button>]}>

        </Result>
    )
}

export default Error404