import { useApp } from "@/contexts/AppContext"
import BlockModal from "@/modals/BlockModal"
import ChooseChatThemeModal from "@/modals/ChooseChatThemeModal"
import DeleteMessagesModal from "@/modals/DeleteMessagesModal"
import ChatInputSection from "@/sections/ChatInputSection"
import MessagesSection from "@/sections/MessagesSection"
import { ImageBackground } from "react-native"

const ChatScreen = () => {
  const { state: stateApp } = useApp()

  return (
    <ImageBackground
      source={require('../assets/images/wallpaper (59).jpg')}
      resizeMode="cover"
      className={`flex-1`}
    >
      <MessagesSection />
      {!stateApp.openChatSearch && <ChatInputSection />}
      <ChooseChatThemeModal />
      <DeleteMessagesModal />
      <BlockModal />
    </ImageBackground>
  )
}

export default ChatScreen
