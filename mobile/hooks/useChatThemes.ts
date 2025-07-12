import { useApp } from "@/contexts/AppContext"
import { useModals } from "@/contexts/ModalsContext"
import { useProfileStore } from "@/store/useProfileStore"
import Toast from "react-native-toast-message"
import useAxios from "./useAxios"

const useChatThemes = () => {
    const { server } = useAxios()
    const { state: stateApp, dispatch: dispatchApp } = useApp()
    const { dispatch: dispatchModals } = useModals()
    const { profile, setProfile } = useProfileStore((state) => state)

    const handleFetchChatThemes = async ({ pageParam = 1 }) => {
        try {
            const res = await server.get(`/chat_themes?page=${pageParam}&limit=10`);
            console.log(res.data.data)
            return res.data.data || [];
        } catch (err) {
            console.error("Fetch avatars error:", err);
            return [];
        }
    };

    const handleChooseChatTheme = async () => {
        const chosenChatTheme = stateApp.chosenChatTheme
        dispatchModals({ type: "chooseChatThemeModal", payload: false })
        if (!chosenChatTheme) {
            Toast.show({
                type: "error",
                text1: "Choose Chat Theme"
            })
            return
        }
        dispatchApp({ type: "openBackDrop", payload: true })
        await server.put(`/users`, { chat_theme: chosenChatTheme }).then((res) => {
            const { message } = res.data
            if (profile && chosenChatTheme) {
                setProfile({ ...profile, chat_theme: chosenChatTheme })
            }
            Toast.show({
                type: "success",
                text1: message
            })
            dispatchApp({ type: "openBackDrop", payload: false })
        })
        dispatchApp({ type: "openBackDrop", payload: false })
    }

    return { handleFetchChatThemes, handleChooseChatTheme }
}

export default useChatThemes
