import useAxios from "@/hooks/useAxios";
import { useProfileStore } from "@/store/useProfileStore";
import { UpdateEmailTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useUpdateEmailSubmit = () => {
    const { server } = useAxios()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleUpdateEmail = async (values: UpdateEmailTypes) => {
        await server.put('/users', { ...values, email: values.email }).then(async (res) => {
            const { message } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            if (profile) {
                setProfile({ ...profile, email: values.email })
            }
            router.push("/(tabs)/(profile)/profile")
        })
    }

    return { handleUpdateEmail }
}

export default useUpdateEmailSubmit
