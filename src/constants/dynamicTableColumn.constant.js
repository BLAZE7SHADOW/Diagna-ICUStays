import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const gcsColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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

export const pupilColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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
  {
    title: "Unit of Measurement",
    dataIndex: "valueuom",
    key: "valueuom",
  },
];

export const strengthColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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
  {
    title: "Unit of Measurement",
    dataIndex: "valueuom",
    key: "valueuom",
  },
];

export const orientationColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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
  {
    title: "Unit of Measurement",
    dataIndex: "valueuom",
    key: "valueuom",
  },
];

export const motorColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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
  {
    title: "Unit of Measurement",
    dataIndex: "valueuom",
    key: "valueuom",
  },
];

export const labColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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
  {
    title: "Unit of Measurement",
    dataIndex: "valueuom",
    key: "valueuom",
  },
];

export const ventilationSettingsColumns = [
  {
    title: "Chart Date",
    dataIndex: "charttime",
    key: "chartdate",
    render: (charttime) => dayjs.utc(charttime).local().format("DD MMM YYYY"),
  },
  {
    title: "Chart Time",
    dataIndex: "charttime",
    key: "charttime",
    render: (charttime) => dayjs.utc(charttime).local().format("hh:mm A"),
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
  {
    title: "Unit of Measurement",
    dataIndex: "valueuom",
    key: "valueuom",
  },
  {
    title: "Parameter Type",
    dataIndex: "param_type",
    key: "param_type",
  },
  {
    title: "Parameter Category",
    dataIndex: "param_category",
    key: "param_category",
  },
];
