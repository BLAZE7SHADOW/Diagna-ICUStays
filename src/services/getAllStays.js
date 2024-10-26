import { apiAllStaysUrl, apiBaseUrl } from "../Utils/variables";

export const getAllStays = async () => {
  const apiResponse = await fetch(`${apiBaseUrl}${apiAllStaysUrl}`);
  return await apiResponse.json();
};
