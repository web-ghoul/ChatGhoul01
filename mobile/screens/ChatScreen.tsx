import ChooseChatThemeModal from "@/modals/ChooseChatThemeModal"
import DeleteMessagesModal from "@/modals/DeleteMessagesModal"
import ChatInputSection from "@/sections/ChatInputSection"
import MessagesSection from "@/sections/MessagesSection"
import { ImageBackground } from "react-native"

const ChatScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/wallpaper (59).jpg')}
      resizeMode="cover"
      className={`flex-1`}
    >
      <MessagesSection />
      <ChatInputSection />
      <ChooseChatThemeModal/>
      <DeleteMessagesModal/>
    </ImageBackground>
  )
}

export default ChatScreen
