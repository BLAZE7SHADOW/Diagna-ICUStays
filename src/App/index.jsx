import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import LandingPage from "./Pages/LandingPage";
import AppHeader from "../components/Layout/AppHeader";
import AppSider from "../components/Layout/AppSider";
import { ROUTE_PATHS } from "../constants";
import DynamicContent from "../components/DynamicContent";
import ErrorBoundary from "../components/common/ErrorBoundary";
import Error500 from "../components/common/Error500";
import useShowSider from "../Utils/hooks/useShowSider";

const { Content, Header, Sider } = Layout;

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const showSider = useShowSider();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ErrorBoundary fallback={<Error500 />}>
        <Header style={{ background: "white", paddingInline: "20px" }}>
          <AppHeader />
        </Header>
        <Layout>
          {showSider ? (
            <Sider style={{ background: "white" }}>
              <AppSider />
            </Sider>
          ) : null}

          <Content>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.GCS.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.GCS.api}
                    columns={ROUTE_PATHS.NEUROLOGY.GCS.columns}
                    params={ROUTE_PATHS.NEUROLOGY.GCS.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.PUPIL.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.PUPIL.api}
                    columns={ROUTE_PATHS.NEUROLOGY.PUPIL.columns}
                    params={ROUTE_PATHS.NEUROLOGY.PUPIL.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.STRENGTH.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.STRENGTH.api}
                    columns={ROUTE_PATHS.NEUROLOGY.STRENGTH.columns}
                    params={ROUTE_PATHS.NEUROLOGY.STRENGTH.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.ORIENTATION.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.ORIENTATION.api}
                    columns={ROUTE_PATHS.NEUROLOGY.ORIENTATION.columns}
                    params={ROUTE_PATHS.NEUROLOGY.ORIENTATION.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.NEUROLOGY.MOTOR.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.NEUROLOGY.MOTOR.api}
                    columns={ROUTE_PATHS.NEUROLOGY.MOTOR.columns}
                    params={ROUTE_PATHS.NEUROLOGY.MOTOR.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.LABS.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.LABS.api}
                    columns={ROUTE_PATHS.LABS.columns}
                    params={ROUTE_PATHS.LABS.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.VENTILATION.SETTING.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.VENTILATION.SETTING.api}
                    columns={ROUTE_PATHS.VENTILATION.SETTING.columns}
                    params={ROUTE_PATHS.VENTILATION.SETTING.params}
                  />
                }
              />
              <Route
                path={ROUTE_PATHS.VENTILATION.OBSERVATION.route}
                element={
                  <DynamicContent
                    apiEndpoint={ROUTE_PATHS.VENTILATION.OBSERVATION.api}
                    columns={ROUTE_PATHS.VENTILATION.OBSERVATION.columns}
                    params={ROUTE_PATHS.VENTILATION.OBSERVATION.params}
                  />
                }
              />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </Content>
        </Layout>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
