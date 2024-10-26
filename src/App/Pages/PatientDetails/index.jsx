import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DatePicker, Typography, Spin } from "antd";
import dayjs from "dayjs";

import {
  getNeurologyData,
  getLabsData,
  getVentilationData,
} from "../../../services";
import NeurologyTable from "../NeurologyTable";
import VentilationTable from "../VentilationTable";
import TabContent from "../../Table";
import withDataTabs from "../WithTabsData";
import { useQuery } from "react-query";
import { parseQueryString } from "../../../Utils/functions";
import LabsTable from "../LabsTable";

const { Title } = Typography;

// Define sub-tab configurations
const NEUROLOGY_SUBTABS = [
  { title: "GCS", filterKey: "GCS", Component: NeurologyTable },
  { title: "Pupil", filterKey: "Pupil", Component: NeurologyTable },
  { title: "Strength", filterKey: "Strength", Component: NeurologyTable },
  { title: "Orientation", filterKey: "Orientation", Component: NeurologyTable },
  { title: "Motor", filterKey: "Motor", Component: NeurologyTable },
];

const VENTILATION_SUBTABS = [
  { title: "Setting", filterKey: "Setting", Component: VentilationTable },
  {
    title: "Observation",
    filterKey: "Observation",
    Component: VentilationTable,
  },
];

// Main tabs configuration
const TABS_CONFIG = (stayId) => [
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
    Component: LabsTable,
  },
  {
    title: "Ventilation",
    key: "ventilation",
    fetchData: (date) => getVentilationData(date),
    subTabs: VENTILATION_SUBTABS,
  },
];

const PatientDetails = () => {
  const restParams = useLocation();
  const { stayId, lastDate } = parseQueryString(restParams?.search);

  const [selectedDate, setSelectedDate] = useState(dayjs());

  useEffect(() => {
    setSelectedDate(dayjs(lastDate));
  }, [lastDate]);

  // Fetch neurology data to determine the last available date
  const { data: neurologyData, isLoading: loadingNeurology } = useQuery(
    ["neurology", stayId, dayjs(lastDate).isValid() ? lastDate : null],
    () =>
      getNeurologyData(
        stayId,
        dayjs(lastDate).isValid() ? lastDate : null,
        "GCS"
      ),
    {
      onSuccess: (data) => {
        // Set default date to last available date in neurology data
        // if (data && data.length > 0) {
        //   const lastDatee = dayjs(data[data.length - 1].date).format(
        //     "YYYY-MM-DD"
        //   );
        //   setSelectedDate(lastDatee);
        // }
      },
    }
  );

  const WrappedTabs = withDataTabs(TabContent);

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Patient Details: Stay ID {stayId}</Title>
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        format="YYYY-MM-DD"
        style={{ marginBottom: "20px" }}
      />
      {loadingNeurology ? (
        <Spin />
      ) : (
        <WrappedTabs
          tabsConfig={TABS_CONFIG(stayId)}
          date={selectedDate}
          setSelectedDate={setSelectedDate}
          stayId={stayId} // Pass stayId
        />
      )}
    </div>
  );
};

export default PatientDetails;
