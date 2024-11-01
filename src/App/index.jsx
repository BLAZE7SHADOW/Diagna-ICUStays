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
        <Header style={{ background: "white", paddingInline: "20px" }}>
          <AppHeader />
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
                    columns={ROUTE_PATHS.NEUROLOGY.PUPIL.columns}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.STRENGTH.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.STRENGTH.api}
                    columns={ROUTE_PATHS.NEUROLOGY.STRENGTH.columns}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.ORIENTATION.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.ORIENTATION.api}
                    columns={ROUTE_PATHS.NEUROLOGY.ORIENTATION.columns}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.MOTOR.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.MOTOR.api}
                    columns={ROUTE_PATHS.NEUROLOGY.MOTOR.columns}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.LABS.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.LABS.api}
                    columns={ROUTE_PATHS.LABS.columns}
                  />
                }
              />
                <Route
                path={ROUTE_PATHS.VENTILATION.SETTING.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.VENTILATION.SETTING.api}
                    columns={ROUTE_PATHS.VENTILATION.SETTING.columns}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.VENTILATION.OBSERVATION.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.VENTILATION.OBSERVATION.api}
                    columns={ROUTE_PATHS.VENTILATION.OBSERVATION.columns}
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
