import useAxios from "@/hooks/useAxios";
import { useProfileStore } from "@/store/useProfileStore";
import { UpdatePhoneTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useUpdatePhoneSubmit = () => {
    const { server } = useAxios()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleUpdatePhone = async (values: UpdatePhoneTypes) => {
        await server.put('/users', values).then(async (res) => {
            const { message } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            if (profile) {
                setProfile({ ...profile, phone: values.phone })
            }
            router.push("/(tabs)/(profile)/profile")
        })
    }

    return { handleUpdatePhone }
}

export default useUpdatePhoneSubmit
