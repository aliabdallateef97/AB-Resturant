import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  client.defaults.headers.common.Accept = `application/json, ar`;
  const onSuccess = (response: AxiosResponse<T>) => response.data;
  const onError = (error: any) => {
    throw error;
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
