import dayjs from "dayjs";

export const gcsColumns = [
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


export const labColumns = [
    { title: "Subject ID", dataIndex: "subjectId", key: "subjectId" },
    { title: "Stay ID", dataIndex: "stayId", key: "stayId" },
    { title: "Lab Test", dataIndex: "testName", key: "testName" },
    { title: "Result", dataIndex: "result", key: "result" },
    { title: "Unit", dataIndex: "unit", key: "unit" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Time", dataIndex: "time", key: "time" },
  ];
