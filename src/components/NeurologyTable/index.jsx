import { Table } from "antd";
import { columns } from "./Neurology.mock";

const NeurologyTable = ({ data }) => {
  return <Table dataSource={data} columns={columns} rowKey="index" />;
};

export default NeurologyTable;
