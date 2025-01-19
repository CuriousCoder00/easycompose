import { BASE_API_URL } from "@/lib/env.config";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // Redirect to login page
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('easy_compose_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response?.status === 401) {
        localStorage.removeItem('easy_compose_token');
        window.location.href = '/auth/login';
    }
    return Promise.reject(error);
});

export default axiosInstance;