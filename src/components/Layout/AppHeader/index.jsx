/* eslint-disable no-unused-vars */
import { Avatar, Col, Dropdown, Layout, Row, Space } from "antd";
import { useNavigate } from "react-router";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Header } = Layout;

export default function AppHeader() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("User");

  const logout = () => {
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: (
        <Space onClick={() => {}}>
          <UserOutlined />
          My Profile
        </Space>
      ),
    },
    // {
    //     key: '2',
    //     label: (
    //         <Space>
    //             <SettingOutlined />
    //             Settings
    //         </Space>
    //     ),
    // },
    {
      key: "3",
      label: (
        <Space onClick={logout}>
          <LogoutOutlined />
          Logout
        </Space>
      ),
    },
  ];

  return (
    <Header style={{ background: "white" }}>
      <Row justify={"space-between"} align={"middle"} style={{ minHeight: 64 }}>
        <Col style={{ height: 30 }}>
          <Link to="/">
            <img
              src="https://voicegenie.ai/images/logo.png"
              alt="Voicegenie Logo"
              style={{ maxHeight: 40 }}
            />
          </Link>
        </Col>

        <Col>
          <Dropdown menu={{ items }}>
            <Avatar style={{ cursor: "pointer", backgroundColor: "#0055FD" }}>
              {userName ?? "User"}
            </Avatar>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
}
