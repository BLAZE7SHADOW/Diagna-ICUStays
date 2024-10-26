import dayjs from "dayjs";

// Formats date or returns "N/A" if invalid
export const formatDate = (date) => {
  return date ? dayjs(date).format("YYYY-MM-DD HH:mm") : "N/A";
};

// Rounds LOS to 0 decimal places or returns "N/A" if invalid
export const formatLOS = (los) => {
  return los && !isNaN(los) ? Math.round(los) : "N/A";
};
