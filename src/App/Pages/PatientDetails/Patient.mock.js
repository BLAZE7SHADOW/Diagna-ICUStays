import NeurologyTable from "../../../components/NeurologyTable";
import VentilationTable from "../../../components/VentilationTable";

export const NEUROLOGY_SUBTABS = [
  { title: "GCS", filterKey: "GCS", Component: NeurologyTable },
  { title: "Pupil", filterKey: "Pupil", Component: NeurologyTable },
  { title: "Strength", filterKey: "Strength", Component: NeurologyTable },
  { title: "Orientation", filterKey: "Orientation", Component: NeurologyTable },
  { title: "Motor", filterKey: "Motor", Component: NeurologyTable },
];

export const VENTILATION_SUBTABS = [
  { title: "Setting", filterKey: "Setting", Component: VentilationTable },
  {
    title: "Observation",
    filterKey: "Observation",
    Component: VentilationTable,
  },
];
