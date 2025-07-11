import useAxios from "@/hooks/useAxios";
import useSecureStore from "@/hooks/useSecureStore";
import { useAuthStore } from "@/store/useAuthStore";
import { RegisterTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useRegisterSubmit = () => {
    const { server } = useAxios(false)
    const { handleStore } = useSecureStore()
    const { setAuth } = useAuthStore((state) => state)

    const handleRegister = async (values: RegisterTypes) => {
        await server.post('/auth/register', { ...values, email: values.email, username: values.username }).then(async (res) => {
            const { message, token } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            await handleStore(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`, token)
            setAuth({ token })
            router.push("/welcome")
        })
    }

    return { handleRegister }
}

export default useRegisterSubmit
