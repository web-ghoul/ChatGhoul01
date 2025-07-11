import useAxios from "@/hooks/useAxios";
import { useProfileStore } from "@/store/useProfileStore";
import { UpdateGenderTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useUpdateGenderSubmit = () => {
    const { server } = useAxios()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleUpdateGender = async (values: UpdateGenderTypes) => {
        await server.put('/users', values).then(async (res) => {
            const { message } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            if (profile) {
                setProfile({ ...profile, gender: values.gender })
            }
            router.push("/(tabs)/(profile)/profile")
        })
    }

    return { handleUpdateGender }
}

export default useUpdateGenderSubmit
