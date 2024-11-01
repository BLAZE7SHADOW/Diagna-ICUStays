import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import LandingPage from "./Pages/LandingPage";
import AppHeader from "../components/Layout/AppHeader";
import AppSider from "../components/Layout/AppSider";
import { ROUTE_PATHS } from "../constants";
import DynamicContent from "../components/DynamicContent";

const { Content, Header, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <AppHeader /> {/* Header appears on all routes */}
        </Header>
        <Layout>
          <Sider>
            <AppSider />
          </Sider>
          <Content>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.GCS.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.GCS.api}
                    columns={ROUTE_PATHS.NEUROLOGY.GCS.columns}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.PUPIL.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.PUPIL.api}
                  />
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
