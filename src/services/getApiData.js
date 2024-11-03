import axios from "axios";
import { API_ROUTES, BASEURL } from "../constants";

export const fetchData = async (url) => {
  try {
    const response = await axios({ baseURL: BASEURL, url, method: "GET" });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error fetching data from ${url}:`, error.response.data);
    } else if (error.request) {
      console.error(`No response received for ${url}:`, error.request);
    } else {
      console.error(`Error in setup for ${url}:`, error.message);
    }
    return [];
  }
};

export const getAllStays = async (params = {}) => {
  const url = `${API_ROUTES.MISC}?${new URLSearchParams(params).toString()}`;
  return fetchData(url);
};
export const getDateRange = async (params = {}) => {
  const url = `${API_ROUTES.GET_DATE_RANGE}?${new URLSearchParams(
    params
  ).toString()}`;
  return fetchData(url);
};
export const geStayDetails = async (params = {}) => {
  const url = `${API_ROUTES.STAY_DETAILS}?${new URLSearchParams(
    params
  ).toString()}`;
  return fetchData(url);
};
