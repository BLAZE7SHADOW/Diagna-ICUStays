import {
  apiAllStaysUrl,
  apiBaseUrl,
  apiLabs,
  apiNeurology,
  apiVentilation,
} from "../Utils/variables";
import axios from "axios";

// export const getAllStays = async (page_number = 1, num_entries = 10) => {
//   const apiResponse = await fetch(
//     `${apiBaseUrl}${apiAllStaysUrl}?page_number=${page_number}&num_entries=${num_entries}`
//   );
//   if (!apiResponse.ok) {
//     throw new Error(`HTTP error! status: ${apiResponse.status}`);
//   }
//   return await apiResponse.json();
// };

// Function to handle API requests and data validation
const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
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

// Fetch all stays with pagination
export const getAllStays = async (page_number = 1, num_entries = 10) => {
  const url = `${apiBaseUrl}${apiAllStaysUrl}?page_number=${page_number}&num_entries=${num_entries}`;
  return fetchData(url);
};

// Fetch neurology data
export const getNeurologyData = async (stayId, date, type) => {
  return fetchData(
    `${apiBaseUrl}${apiNeurology}?stay_id=${stayId}&date=${date}&type=${type}`
  );
};

// Fetch labs data
export const getLabsData = async (stayId, date) => {
  return fetchData(`${apiBaseUrl}${apiLabs}?stay_id=${stayId}&date=${date}`);
};

// Fetch ventilation data
export const getVentilationData = async (stayId) => {
  return fetchData(`${apiBaseUrl}${apiVentilation}?stay_id=${stayId}`);
};