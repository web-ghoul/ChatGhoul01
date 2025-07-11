import { useApp } from "@/contexts/AppContext"
import { useModals } from "@/contexts/ModalsContext"
import { useProfileStore } from "@/store/useProfileStore"
import Toast from "react-native-toast-message"
import useAxios from "./useAxios"
import useImagePicker from "./useImagePicker"

const useAvatar = () => {
    const { server } = useAxios(true, true)
    const { dispatch: dispatchApp } = useApp()
    const { dispatch: dispatchModals } = useModals()
    const { profile, setProfile } = useProfileStore((state) => state)
    const { handlePickImage } = useImagePicker()

    const handleUpdateAvatarFromDevice = async () => {
        const file = await handlePickImage();
        if (!file) return;
        const formData = new FormData();
        const fileToUpload = {
            uri: file.uri,
            name: file.fileName || file.uri.split('/').pop() || 'avatar.jpg',
            type: file.mimeType || 'image/jpeg'
        };
        formData.append("avatar", fileToUpload as any);
        dispatchModals({ type: "editAvatarModal", payload: false })
        dispatchApp({ type: "openBackDrop", payload: true })
        await server.put(`/users/avatar`, formData).then((res) => {
            const { avatar, message } = res.data
            if (profile) {
                setProfile({ ...profile, avatar })
            }
            Toast.show({
                type: "success",
                text1: message
            })
            dispatchApp({ type: "openBackDrop", payload: false })
        })
        dispatchApp({ type: "openBackDrop", payload: false })
    }

    return { handleUpdateAvatarFromDevice }
}

export default useAvatar
