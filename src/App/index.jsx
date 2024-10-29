import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PatientDetails from "./Pages/PatientDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="patients" element={<PatientDetails />}>
          {/* <Route index element={<Navigate to="neurology" replace />} /> */}
          {/* <Route path="neurology" element={<Neurology />} />
          <Route path="labs" element={<Labs />} />
          <Route path="ventilation" element={<Ventilation />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
