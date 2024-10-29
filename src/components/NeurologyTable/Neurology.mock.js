import dayjs from "dayjs";

export const columns = [
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
