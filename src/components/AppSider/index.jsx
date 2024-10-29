import {
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Affix, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;

const NEUROLOGY_SUBTABS = [
  { key: "1-1-1", label: "GCS" },
  { key: "1-1-2", label: "Pupil" },
  { key: "1-1-3", label: "Strength" },
  { key: "1-1-4", label: "Orientation" },
  { key: "1-1-5", label: "Motor" },
];

const VENTILATION_SUBTABS = [
  { key: "1-2-1", label: "Setting" },
  { key: "1-2-2", label: "Observation" },
];

// Main menu items with nested structure
export const SIDER_MENU_ITEMS = [
  {
    key: "sub1",
    icon: <UserOutlined />,
    label: "Neurology",
    children: [
      {
        key: "1-1",
        label: "Neurology Options",
        type: "group",
        children: NEUROLOGY_SUBTABS,
      },
    ],
  },
  {
    key: "sub2",
    icon: <UserOutlined />,
    label: "Labs",
  },
  {
    key: "sub3",
    icon: <AppstoreOutlined />,
    label: "Ventilation",
    children: [
      {
        key: "1-2",
        label: "Ventilation Options",
        type: "group",
        children: VENTILATION_SUBTABS,
      },
    ],
  },
];

export default function AppSider() {
  const location = useLocation();

  return (
    <Affix offsetTop={0}>
      <Sider theme="light" style={{ height: "calc(100vh - 70px)" }}>
        <Menu
          theme="light"
          // onClick={onClick}
          // style={{
          //   width: 256,
          // }}
          defaultOpenKeys={["sub1"]}
          defaultSelectedKeys={[location.pathname]}
          // selectedKeys={[current]}
          mode="inline"
          items={SIDER_MENU_ITEMS}
        />
      </Sider>
    </Affix>
  );
}
