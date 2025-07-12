import { useApp } from "@/contexts/AppContext";
import { useForms } from "@/contexts/FormsContext";
import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import Toast from 'react-native-toast-message';

const useAxios = (authorized: boolean = true) => {
    const { dispatch: dispatchForms } = useForms();
    const { dispatch: dispatchApp } = useApp()
    const { auth } = useAuthStore((state) => state)

    const headers: Record<string, string> = {};

    if (authorized && auth?.token) {
        headers['Authorization'] = `Bearer ${auth.token}`;
    }

    const server = axios.create({
        baseURL: `${process.env.EXPO_PUBLIC_SERVER_URL}`,
        headers,
    });

    server.interceptors.request.use((config) => {
        dispatchForms({ type: "loading", payload: true });
        return config;
    });

    server.interceptors.response.use(
        (response) => {
            dispatchForms({ type: "loading", payload: false });
            dispatchApp({ type: "openBackDrop", payload: false })
            return response;
        },
        (error) => {
            dispatchForms({ type: "loading", payload: false });
            dispatchApp({ type: "openBackDrop", payload: false })
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
