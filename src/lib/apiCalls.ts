import axiosInstance from './axios';

export const getApi = async <T = unknown>(url: string, config = {}) => {
  try {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Requested data is not available")
  }
};
