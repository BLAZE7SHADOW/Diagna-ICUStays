import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatePicker, Typography, Layout } from "antd";
import dayjs from "dayjs";
import { parseQueryString } from "../../../Utils/functions";
import withDataTabs from "../../../components/WithTabsData";
import TabContent from "../../../components/TabContent";
import AppSider from "../../../components/Layout/AppSider";
import { TABS_CONFIG } from "./Patient.config";
import DynamicContent from "../../../components/DynamicContent";

const PatientDetails = ({}) => {
  const restParams = useLocation();
  const { stayId, lastDate } = parseQueryString(restParams?.search);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  useEffect(() => {
    setSelectedDate(dayjs(lastDate));
  }, [lastDate]);

  const WrappedTabs = withDataTabs(TabContent);

  return (
    <DynamicContent />
  );
};

export default PatientDetails;
