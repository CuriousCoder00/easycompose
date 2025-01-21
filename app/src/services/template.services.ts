import { AxiosError } from "axios";
import axiosInstance from "./axios.config";

export const getAllTemplates = async () => {
    try {
        const res = await axiosInstance.get("/template/all");
        return res.data;
    } catch (error: any) {
        return Promise.reject((error as AxiosError).response?.data);
    }
}

export const getUserTemplates = async () => {
    try {
        const res = await axiosInstance.get("/template/user");
        return res.data;
    } catch (error: any) {
        return Promise.reject((error as AxiosError).response?.data);
    }
}

export const getTemplate = async () => {
    try {
        const res = await axiosInstance.get("/template");
        return res.data;
    } catch (error: any) {
        return Promise.reject((error as AxiosError).response?.data);
    }
}