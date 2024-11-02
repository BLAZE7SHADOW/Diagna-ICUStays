import { Button, Result } from 'antd'
import React from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { resetAuth } from '../../store/authSlice'

const Error401 = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(resetAuth());
    }
    return (
        <Result
            status={'error'}
            title="Unauthorized"
            subTitle="You don't have access to this platform"
            extra={[<Button type='primary' icon={<ArrowLeftOutlined />} onClick={logout}>Go Back to Login</Button>]}>

        </Result>
    )
}

export default Error401