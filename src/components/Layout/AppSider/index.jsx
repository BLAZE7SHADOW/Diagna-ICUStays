import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Affix, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

const NEUROLOGY_SUBTABS = [
  { key: "gcs", label: "GCS" },
  { key: "pupil", label: "Pupil" },
  { key: "strength", label: "Strength" },
  { key: "orientation", label: "Orientation" },
  { key: "motor", label: "Motor" },
];

const VENTILATION_SUBTABS = [
  { key: "setting", label: "Setting" },
  { key: "observation", label: "Observation" },
];

const SIDER_MENU_ITEMS = [
  {
    key: "dashboard",
    icon: <UserOutlined />,
    label: "Dashboard",
  },
  {
    key: "neurology",
    icon: <UserOutlined />,
    label: "Neurology",
    children: NEUROLOGY_SUBTABS,
  },
  { key: "labs", icon: <UserOutlined />, label: "Labs" },
  {
    key: "ventilation",
    icon: <AppstoreOutlined />,
    label: "Ventilation",
    children: VENTILATION_SUBTABS,
  },
];

export default function AppSider() {
  const navigate = useNavigate();

  const onSelect = ({ keyPath }) => {
    const [type, section] = keyPath;
    if (type === "dashboard") {
      navigate(`/`);
      return;
    }
    navigate(`/${section}/${type}`);
  };

  return (
    <Affix offsetTop={0}>
      <Sider theme="light" style={{ height: "calc(100vh - 70px)" }}>
        <Menu
          theme="light"
          defaultOpenKeys={["neurology"]}
          defaultSelectedKeys={["gcs"]}
          mode="inline"
          items={SIDER_MENU_ITEMS}
          onSelect={onSelect}
        />
      </Sider>
    </Affix>
  );
}
