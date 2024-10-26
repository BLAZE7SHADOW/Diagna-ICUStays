import { Table } from "antd";
import dayjs from "dayjs";

const NeurologyTable = ({ data }) => {
  const columns = [
    {
      title: "Chart Time",
      dataIndex: "charttime",
      key: "charttime",
      render: (charttime) => dayjs(charttime).format("YYYY-MM-DD HH:mm a"),
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Value Number",
      dataIndex: "valuenum",
      key: "valuenum",
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="index" />;
};

export default NeurologyTable;
