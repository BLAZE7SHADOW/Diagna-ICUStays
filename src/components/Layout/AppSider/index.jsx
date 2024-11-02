import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Affix, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const queryParams = Array.from(params.entries())
    .filter(([key, value]) => key && value) // Exclude empty keys or values
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  const onSelect = ({ keyPath }) => {
    const [type, section] = keyPath;
    if (type === "dashboard") {
      navigate(`/`);
      return;
    }

    if (keyPath?.length === 1 && section === undefined) {
      navigate(`/${type}?${queryParams}`);
      return;
    }

    navigate(`/${section}/${type}?${queryParams}`);
  };

  return (
    <Affix offsetTop={0}>
      <Menu
        theme="light"
        defaultOpenKeys={["neurology"]}
        defaultSelectedKeys={["gcs"]}
        mode="inline"
        items={SIDER_MENU_ITEMS}
        onSelect={onSelect}
      />
    </Affix>
  );
}
