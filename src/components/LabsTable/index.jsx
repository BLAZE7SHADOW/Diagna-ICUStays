/* eslint-disable react/prop-types */
import { Table } from "antd";
import dayjs from "dayjs";
import { columns } from "./LabsTable.mock";

const LabsTable = ({ data }) => {
  const formattedData = data?.map((item) => ({
    id: item.index,
    subjectId: item.subject_id,
    stayId: item.stay_id,
    testName: item.label,
    result: item.value,
    unit: item.valueuom || "",
    date: dayjs(item.charttime).format("YYYY-MM-DD"),
    time: dayjs(item.charttime).format("hh:mm A"),
  }));

  return <Table dataSource={formattedData} columns={columns} rowKey="id" />;
};

export default LabsTable;
