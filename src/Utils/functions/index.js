import dayjs from "dayjs";

// Formats date or returns "N/A" if invalid
export const formatDate = (date) => {
  return date ? dayjs(date).format("DD MMM YYYY hh:mm A") : "N/A";
};

// Rounds LOS to 0 decimal places or returns "N/A" if invalid
export const formatLOS = (los) => {
  return los && !isNaN(los) ? Math.ceil(los) : "N/A";
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

export const queryParams = (params) => {
  return Array.from(params.entries())
    .filter(([key, value]) => key && value) // Exclude empty keys or values
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export const extractSelectedParams = (params, keys, keyMapping = {}) => {
  const selectedParams = new URLSearchParams();
  Array.from(params.entries()).forEach(([key, value]) => {
    if (keys.includes(key)) {
      const mappedKey = keyMapping[key] || key;
      selectedParams.append(mappedKey, value);
    }
  });

  return selectedParams;
};

export const getTypeFromPath = () => {
  const pathSegments = window.location.pathname
    .split("/")
    .filter((segment) => segment);
  if (pathSegments.length >= 2) {
    return pathSegments[pathSegments.length - 2];
  } else if (pathSegments.length === 1) {
    return pathSegments[0];
  }
  return null;
};

export const capitalizeFirstLetter = (str) => {
  return str
    .toLowerCase() // Convert the entire string to lowercase first
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string
};
