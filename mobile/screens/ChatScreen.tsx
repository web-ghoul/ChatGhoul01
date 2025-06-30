import Container from "@/components/Container"
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
      <Container className="flex flex-col items-center flex-1">
        <MessagesSection />
        <ChatInputSection />
      </Container>
    </ImageBackground>
  )
}

export default ChatScreen
