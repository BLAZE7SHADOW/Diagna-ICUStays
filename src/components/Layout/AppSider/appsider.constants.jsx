import {
  UserOutlined,
  AppstoreOutlined,
  HomeOutlined,
  SolutionOutlined,
  EyeOutlined,
  SettingOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

const NEUROLOGY_SUBTABS = [
  { icon: <SolutionOutlined />, key: "gcs", label: "GCS" },
  { icon: <EyeOutlined />, key: "pupil", label: "Pupil" },
  { icon: <SolutionOutlined />, key: "strength", label: "Strength" },
  { icon: <SolutionOutlined />, key: "orientation", label: "Orientation" },
  { icon: <SolutionOutlined />, key: "motor", label: "Motor" },
];
const VENTILATION_SUBTABS = [
  { icon: <SettingOutlined />, key: "setting", label: "Setting" },
  { icon: <FileSearchOutlined />, key: "observation", label: "Observation" },
];

export const SIDER_MENU_ITEMS = [
  {
    key: "dashboard",
    icon: <HomeOutlined />,
    label: "Dashboard",
  },
  {
    key: "neurology",
    icon: (
      <img
        src="/assets/brain.png"
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
