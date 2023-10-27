import axios from "axios";

export const get = async (URL) => {
  try {
    const response = await axios.get(URL);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("API error:", error);
  }
};

export const post = async (URL, data) => {
  try {
    const response = await axios.post(URL, data);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("API error:", error);
  }
};