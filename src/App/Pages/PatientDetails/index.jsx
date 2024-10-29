import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DatePicker, Typography, Layout } from "antd";
import dayjs from "dayjs";
import { parseQueryString } from "../../../Utils/functions";
import withDataTabs from "../../../components/WithTabsData";
import TabContent from "../../../components/TabContent";
import AppSider from "../../../components/AppSider";
import { TABS_CONFIG } from "./Patient.config";

const { Title } = Typography;
const { Content } = Layout;

const PatientDetails = () => {
  const restParams = useLocation();
  const { stayId, lastDate } = parseQueryString(restParams?.search);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  useEffect(() => {
    setSelectedDate(dayjs(lastDate));
  }, [lastDate]);

  const WrappedTabs = withDataTabs(TabContent);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSider />
      <Layout>
        <Content style={{ padding: "20px" }}>
          <Title level={2}>Patient Details: Stay ID {stayId}</Title>
          <DatePicker
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              // TODO: Implement logic to update date in query params
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default PatientDetails;
