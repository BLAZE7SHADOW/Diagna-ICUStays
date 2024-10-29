import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatePicker, Typography } from "antd";
import dayjs from "dayjs";
import { parseQueryString } from "../../../Utils/functions";
import withDataTabs from "../../../components/WithTabsData";
import TabContent from "../../../components/TabContent";
import { TABS_CONFIG } from "./Patient.config";

const { Title } = Typography;

const PatientDetails = () => {
  const restParams = useLocation();
  const { stayId, lastDate } = parseQueryString(restParams?.search);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  useEffect(() => {
    setSelectedDate(dayjs(lastDate));
  }, [lastDate]);

  const WrappedTabs = withDataTabs(TabContent);

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Patient Details: Stay ID {stayId}</Title>
      <DatePicker
        value={selectedDate}
        onChange={(date) => {
          // Todo: Logic to change date with in query params
          setSelectedDate(date);
        }}
        format="YYYY-MM-DD"
        style={{ marginBottom: "20px" }}
      />
      <WrappedTabs
        tabsConfig={TABS_CONFIG(stayId)}
        date={selectedDate}
        setSelectedDate={setSelectedDate}
        stayId={stayId}
      />
    </div>
  );
};

export default PatientDetails;
