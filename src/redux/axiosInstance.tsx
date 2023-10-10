import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { API_URL } from "./api";


const headers = {};

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbmlzLmxvY2FsaG9zdDo5MDkxL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNjkzNTA0NzM1LCJleHAiOjE2OTYwOTY3MzUsIm5iZiI6MTY5MzUwNDczNSwianRpIjoiOGl0N0lhNU85UnJ5eEg4bSIsInN1YiI6IjEiLCJwcnYiOiI0Mjc5Mjc5NTYxMzkwOWJlNjZiY2I2ZjYxNDllOWRmYzIxNDJhMjdiIn0.WKTWFCRapIoDdsKy4elzToN6BhsfcCXUjB3uhtWk9TM";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    headers,
});

axiosInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) =>
        new Promise<AxiosResponse>((resolve) => {
            resolve(response);
        }),
    (error: AxiosError) => {
        if (!error.response) {
            return new Promise<AxiosError>((_, reject) => {
                reject(error);
            });
        }

    },
);

export default axiosInstance;
