import { height, width } from "@/constants";
import { useApp } from "@/contexts/AppContext";
import { ChatThemeTypes } from "@/types/app";
import Feather from "@expo/vector-icons/Feather";
import { Image, TouchableHighlight, View } from "react-native";

const ChatThemeCard = ({ chatTheme }: { chatTheme: ChatThemeTypes }) => {
    const { state: stateApp, dispatch: dispatchApp } = useApp()

    const chosen = stateApp.chosenChatTheme === `${chatTheme.url}`

    return (
        <TouchableHighlight onPress={() => dispatchApp({ type: "chosenChatTheme", payload: `${chatTheme.url}` })}>
            <View className={`overflow-hidden relative rounded-2xl border-[2px] border-solid ${chosen ? "border-primary" : "border-transparent"}`} >
                <Image source={{ uri: chatTheme.url }} className={`flex flex-col items-center`} style={{ width: width * 0.375, height: height * 0.3 }} />

                <View className={`absolute top-0 left-0 w-full h-full ${chosen && "bg-[rgba(0,0,0,.25)]"} flex items-center justify-center`}>
                    {chosen && <Feather name="check" size={30} color="#0092E4" />}
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default ChatThemeCard
