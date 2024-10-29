import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import LandingPage from "./Pages/LandingPage";
import PatientDetails from "./Pages/PatientDetails";
import AppHeader from "../components/AppHeader";

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader /> {/* Header appears on all routes */}
        <Content>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="patients" element={<PatientDetails />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
