/* eslint-disable react/prop-types */
import { Table } from "antd";
import dayjs from "dayjs";

const LabsTable = ({ data }) => {
  // Map response data to match expected column keys and add additional fields
  const formattedData = data?.map((item) => ({
    id: item.index,
    subjectId: item.subject_id,
    stayId: item.stay_id,
    testName: item.label,
    result: item.value,
    unit: item.valueuom || "", // Add unit as a separate column
    date: dayjs(item.charttime).format("YYYY-MM-DD"), // Format date
    time: dayjs(item.charttime).format("hh:mm A"), // Format time in 12-hour AM/PM format
  }));

  const columns = [
    { title: "Subject ID", dataIndex: "subjectId", key: "subjectId" },
    { title: "Stay ID", dataIndex: "stayId", key: "stayId" },
    { title: "Lab Test", dataIndex: "testName", key: "testName" },
    { title: "Result", dataIndex: "result", key: "result" },
    { title: "Unit", dataIndex: "unit", key: "unit" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Time", dataIndex: "time", key: "time" },
  ];

  return <Table dataSource={formattedData} columns={columns} rowKey="id" />;
};

export default LabsTable;
