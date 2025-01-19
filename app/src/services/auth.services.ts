import { AxiosError } from "axios";
import axiosInstance from "./axios.config";
import { LoginInput, RegistrationInput } from "@/lib/validations/auth.validations";

export const login = async (data: LoginInput) => {
    try {
        const response = await axiosInstance.post("/auth/login", data);
        const token = response.data.token;
        localStorage.setItem("easy_compose_token", token);
        return response.data;
    } catch (error) {
        return Promise.reject((error as AxiosError).response?.data);
    }
}

export const register = async (data: RegistrationInput) => {
    try {
        const response = await axiosInstance.post("/auth/register", data);
        return response.data;
    } catch (error) {
        return Promise.reject((error as AxiosError).response?.data);
    }
}

export const logout = async () => {
    try {
        await axiosInstance.post("/auth/logout");
        localStorage.removeItem("easy_compose_token");
        localStorage.removeItem("easy_compose_session");
    } catch (error) {
        return Promise.reject((error as AxiosError).response?.data);
    }
}