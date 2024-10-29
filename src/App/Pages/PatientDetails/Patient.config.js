import LabsTable from "../../../components/LabsTable";
import {
  getLabsData,
  getNeurologyData,
  getVentilationData,
} from "../../../services";
import { NEUROLOGY_SUBTABS, VENTILATION_SUBTABS } from "./Patient.mock";

export const TABS_CONFIG = (stayId) => [
  {
    title: "Neurology",
    key: "neurology",
    fetchData: (date, type) => getNeurologyData(stayId, date, type),
    subTabs: NEUROLOGY_SUBTABS,
  },
  {
    title: "Labs",
    key: "labs",
    fetchData: (date) => getLabsData(stayId, date),
    subTabs: null,
    CategoriesComponent: LabsTable,
  },
  {
    title: "Ventilation",
    key: "ventilation",
    fetchData: (date) => getVentilationData(date),
    subTabs: VENTILATION_SUBTABS,
  },
];
