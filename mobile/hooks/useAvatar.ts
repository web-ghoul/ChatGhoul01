import { useApp } from "@/contexts/AppContext"
import { useModals } from "@/contexts/ModalsContext"
import { useAuthStore } from "@/store/useAuthStore"
import { useProfileStore } from "@/store/useProfileStore"
import Toast from "react-native-toast-message"
import useAxios from "./useAxios"
import useImagePicker from "./useImagePicker"

const useAvatar = () => {
    const { server } = useAxios()
    const { state: stateApp, dispatch: dispatchApp } = useApp()
    const { dispatch: dispatchModals } = useModals()
    const { auth } = useAuthStore((state) => state)
    const { profile, setProfile } = useProfileStore((state) => state)
    const { handlePickImage } = useImagePicker()

    const handleFetchAvatars = async ({ pageParam = 1 }) => {
        try {
            const res = await server.get(`/avatars?page=${pageParam}&limit=10&gender=${profile?.gender}`);
            console.log(res.data.data)
            return res.data.data || [];
        } catch (err) {
            console.error("Fetch avatars error:", err);
            return [];
        }
    };

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
        const headers: Record<string, string> = {};
        headers['Authorization'] = `Bearer ${auth?.token}`;
        headers['Content-Type'] = 'multipart/form-data';
        await server.put(`/users/avatar`, formData, {
            headers
        }).then((res) => {
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

    const handleChooseAvatar = async () => {
        const chosenAvatar = stateApp.chosenAvatar
        dispatchModals({ type: "chooseAvatarModal", payload: false })
        if (!chosenAvatar) {
            Toast.show({
                type: "error",
                text1: "Choose Avatar"
            })
            return
        }
        dispatchApp({ type: "openBackDrop", payload: true })
        await server.put(`/users`, { avatar: chosenAvatar }).then((res) => {
            const { message } = res.data
            if (profile && chosenAvatar) {
                setProfile({ ...profile, avatar: chosenAvatar })
            }
            Toast.show({
                type: "success",
                text1: message
            })
            dispatchApp({ type: "openBackDrop", payload: false })
        })
        dispatchApp({ type: "openBackDrop", payload: false })
    }

    return { handleFetchAvatars, handleUpdateAvatarFromDevice, handleChooseAvatar }
}

export default useAvatar
