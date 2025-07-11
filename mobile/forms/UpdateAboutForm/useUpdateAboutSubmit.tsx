import useAxios from "@/hooks/useAxios";
import { useProfileStore } from "@/store/useProfileStore";
import { UpdateAboutTypes } from "@/types/forms";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

const useUpdateAboutSubmit = () => {
    const { server } = useAxios()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleUpdateAbout = async (values: UpdateAboutTypes) => {
        await server.put('/users', values).then(async (res) => {
            const { message } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            if (profile) {
                setProfile({ ...profile, about: values.about })
            }
            router.push("/(tabs)/(profile)/profile")
        })
    }

    return { handleUpdateAbout }
}

export default useUpdateAboutSubmit
