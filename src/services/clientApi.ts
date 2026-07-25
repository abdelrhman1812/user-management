import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    let errorMessage = "error";

    if (axios.isAxiosError(error)) {
      errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        errorMessage;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return Promise.reject(new Error(errorMessage));
  },
);

export default apiClient;
