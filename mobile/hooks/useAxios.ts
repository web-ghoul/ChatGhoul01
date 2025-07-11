import { useForms } from "@/contexts/FormsContext";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import Toast from 'react-native-toast-message';

const useAxios = (authorized: boolean = true) => {
    const { dispatch } = useForms();
    const { auth } = useAuthStore((state) => state)

    const server = axios.create({
        baseURL: `${process.env.EXPO_PUBLIC_SERVER_URL}`,
        headers: authorized ? {
            Authorization: `Bearer ${auth?.token}`,
        } : {},
    });

    server.interceptors.request.use((config) => {
        dispatch({ type: "loading", payload: true });
        return config;
    });

    server.interceptors.response.use(
        (response) => {
            dispatch({ type: "loading", payload: false });
            return response;
        },
        (error) => {
            dispatch({ type: "loading", payload: false });
            if (error?.response?.data?.message) {
                Toast.show({
                    type: 'error',
                    text1: error.response.data.message,
                });
            }
            if (error.response) {
                console.error("API Error:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No response received from server");
            } else {
                console.error("Axios config error:", error.message);
            }
            return Promise.reject(error);
        }
    );

    return { server };
};

export default useAxios;
