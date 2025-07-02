import { height, width } from "@/constants"
import { useApp } from "@/contexts/AppContext";
import { Image, ImageProps, TouchableHighlight } from "react-native"

const ChatThemeCard = ({ wallpaper, index }: { wallpaper?: ImageProps; index?: number }) => {
    const { state: stateApp, dispatch: dispatchApp } = useApp()

    return (
        <TouchableHighlight onPress={() => dispatchApp({ type: "chosenChatTheme", payload: `${index}` })}>
            <Image source={wallpaper} className={`rounded-2xl flex flex-col items-center border-[2px] border-solid relative ${stateApp.chosenChatTheme === `${index}` ? "border-primary" : "border-transparent"}`} style={{ width: width * 0.375, height: height * 0.3 }} />
        </TouchableHighlight>
    )
}

export default ChatThemeCard
