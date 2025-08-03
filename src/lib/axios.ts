// src/lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status && status >= 400 && status < 600) {
      console.log("Something went wrong with the API.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
