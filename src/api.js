import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const callApi = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");

  const config = {
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
