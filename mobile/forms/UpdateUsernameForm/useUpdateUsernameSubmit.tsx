import { useForms } from "@/contexts/FormsContext";
import useAxios from "@/hooks/useAxios"
import { useProfileStore } from "@/store/useProfileStore";
import { UpdateUsernameTypes } from "@/types/forms"
import { router } from "expo-router";
import Toast from "react-native-toast-message"

const useUpdateUsernameSubmit = () => {
    const { server } = useAxios()
    const { dispatch: dispatchForms } = useForms()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleUpdateUsername = async (values: UpdateUsernameTypes) => {
        dispatchForms({ type: "loading", payload: true })
        await server.put('/users', values).then(async (res) => {
            const { message } = res.data
            Toast.show({
                type: "success",
                text1: message
            })
            if (profile) {
                setProfile({ ...profile, username: values.username })
            }
            dispatchForms({ type: "loading", payload: false })
            router.push("/(tabs)/(profile)/profile")
        })
        dispatchForms({ type: "loading", payload: false })
    }

    return { handleUpdateUsername }
}

export default useUpdateUsernameSubmit
