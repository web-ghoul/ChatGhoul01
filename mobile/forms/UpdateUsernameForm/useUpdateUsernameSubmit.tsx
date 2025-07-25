import useAxios from "@/hooks/useAxios";
import { useProfileStore } from "@/store/useProfileStore";
import { UpdateUsernameTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useUpdateUsernameSubmit = () => {
    const { server } = useAxios()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleUpdateUsername = async (values: UpdateUsernameTypes) => {
        await server.put('/users', { ...values, username: values.username }).then(async (res) => {
            const { message } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            if (profile) {
                setProfile({ ...profile, username: values.username })
            }
            router.push("/(tabs)/(profile)/profile")
        })
    }

    return { handleUpdateUsername }
}

export default useUpdateUsernameSubmit
