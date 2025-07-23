import { useForms } from "@/contexts/FormsContext";
import useAxios from "@/hooks/useAxios";
import useSecureStore from "@/hooks/useSecureStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useProfileStore } from "@/store/useProfileStore";
import { LoginTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useLoginSubmit = () => {
    const { server } = useAxios(false)
    const { dispatch: dispatchForms } = useForms()
    const { handleStore } = useSecureStore()
    const { setAuth } = useAuthStore((state) => state)
    const { setProfile } = useProfileStore((state) => state)

    const handleLogin = async (values: LoginTypes) => {
        dispatchForms({ type: "loading", payload: true })
        await server.post('/auth/login', { ...values, emailOrUsername: values.emailOrUsernameOrPhone }).then(async (res) => {
            const { message, token, data } = res.data
            console.log(data)
            setProfile(data)
            Toast.show({
                type: "success",
                text1: message
            })
            await handleStore(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`, token)
            setAuth({ token })
            dispatchForms({ type: "loading", payload: false })
            router.replace("/ready");
        })
        dispatchForms({ type: "loading", payload: false })
    }

    return { handleLogin }
}

export default useLoginSubmit
