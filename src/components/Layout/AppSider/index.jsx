import { Affix, Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import {
  NEUROLOGY_SUBTABS,
  VENTILATION_SUBTABS,
} from "../../../constants/appsider.constant";
import { queryParams } from "../../../Utils/functions";
const { Sider } = Layout;

export default function AppSider() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const queryParamsString = queryParams(params);

  const onSelect = ({ keyPath }) => {
    const [type, section] = keyPath;
    if (type === "dashboard") {
      navigate(`/`);
      return;
    }
    if (keyPath?.length === 1 && section === undefined) {
      navigate(`/${type}?${queryParamsString}`);
      return;
    }
    navigate(`/${section}/${type}?${queryParamsString}`);
  };

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

  return (
    <Sider style={{ background: "white" }}>
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
    </Sider>
  );
}
