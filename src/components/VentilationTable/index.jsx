/* eslint-disable react/prop-types */
import { Table } from "antd";
import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
const VentilationTable = ({ data }) => {
  // Map data to match expected table format
  const formattedData = data?.map((item) => ({
    id: item.index,
    subjectId: item.subject_id,
    stayId: item.stay_id,
    setting: item.label,
    observation: item.value,
    category: item.param_category,
    date: dayjs(item.charttime).format("YYYY-MM-DD"),
    time: dayjs(item.charttime).format("hh:mm A"), // 12-hour format with AM/PM
  }));

  const columns = [
    { title: "Subject ID", dataIndex: "subjectId", key: "subjectId" },
    { title: "Stay ID", dataIndex: "stayId", key: "stayId" },
    { title: "Setting", dataIndex: "setting", key: "setting" },
    { title: "Observation", dataIndex: "observation", key: "observation" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Time", dataIndex: "time", key: "time" },
  ];

  return <Table dataSource={formattedData} columns={columns} rowKey="id" />;
};

export default VentilationTable;
