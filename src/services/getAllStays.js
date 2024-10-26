import { apiAllStaysUrl, apiBaseUrl } from "../Utils/variables";

export const getAllStays = async (page_number = 1, num_entries = 10) => {
  const apiResponse = await fetch(
    `${apiBaseUrl}${apiAllStaysUrl}?page_number=${page_number}&num_entries=${num_entries}`
  );
  if (!apiResponse.ok) {
    throw new Error(`HTTP error! status: ${apiResponse.status}`);
  }
  return await apiResponse.json();
};
