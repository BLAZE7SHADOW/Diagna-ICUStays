import { Affix, Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  AppstoreOutlined,
  HomeOutlined,
  SolutionOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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

  const NEUROLOGY_SUBTABS = [
    { icon: <SolutionOutlined />, key: "gcs", label: "GCS" },
    { icon: <EyeOutlined />, key: "pupil", label: "Pupil" },
    { icon: <SolutionOutlined />, key: "strength", label: "Strength" },
    { icon: <SolutionOutlined />, key: "orientation", label: "Orientation" },
    { icon: <SolutionOutlined />, key: "motor", label: "Motor" },
  ];
  const VENTILATION_SUBTABS = [
    { icons: <SettingOutlined />, key: "setting", label: "Setting" },
    { icons: <SettingOutlined />, key: "observation", label: "Observation" },
  ];

  const SIDER_MENU_ITEMS = [
    {
      key: "dashboard",
      icon: <HomeOutlined />,
      label: "Dashboard",
    },
    {
      key: "neurology",
      icon: (
        <img
          src="../../../assets/brain.png"
          alt="Brain"
          style={{ width: "16px", height: "16px" }}
        />
      ),
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
