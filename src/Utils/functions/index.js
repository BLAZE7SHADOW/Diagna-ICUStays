import dayjs from "dayjs";

// Formats date or returns "N/A" if invalid
export const formatDate = (date) => {
  return date ? dayjs(date).format("YYYY-MM-DD HH:mm") : "N/A";
};

// Rounds LOS to 0 decimal places or returns "N/A" if invalid
export const formatLOS = (los) => {
  return los && !isNaN(los) ? Math.round(los) : "N/A";
};

export const filterDataByDate = (data, date) => {
  return data?.filter((item) => dayjs(item?.date).isSame(date, "day"));
};

export const parseQueryString = function (query) {
  const obj = {};
  if (query.length) {
    if (query[0] === "?" || query[0] === "#") {
      query = query.substring(1, query.length);
    }
    const tempArr = query.split("&");
    tempArr.forEach(function (str) {
      const arr = str.split("=");
      if (arr.length === 2) {
        obj[arr[0]] = arr[1];
      }
    });
  }
  return obj;
};
