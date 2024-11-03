import { Affix, Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { queryParams } from "../../../Utils/functions";
import { SIDER_MENU_ITEMS } from "./appsider.constants";
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
