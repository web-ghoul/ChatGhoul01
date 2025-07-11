import { os } from '@/constants'
import { useApp } from "@/contexts/AppContext"
import BlockModal from '@/modals/BlockModal'
import ChooseChatThemeModal from '@/modals/ChooseChatThemeModal'
import DeleteMessagesModal from '@/modals/DeleteMessagesModal'
import ChatInputSection from "@/sections/ChatInputSection"
import MessagesSection from "@/sections/MessagesSection"
import { useProfileStore } from "@/store/useProfileStore"
import { useEffect, useState } from "react"
import { ImageBackground, Keyboard, KeyboardAvoidingView, StatusBar, View } from "react-native"

const ChatScreen = () => {
  const { state: stateApp } = useApp()
  const [chatInputHeight, setChatInputHeight] = useState(0)
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const { profile } = useProfileStore((state) => state)

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardOpen(true))
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardOpen(false))

    return () => {
      showSub.remove()
      hideSub.remove()
    }
  }, [])

  const keyboardOffset = isKeyboardOpen
    ? (os === 'ios'
      ? 80
      : (StatusBar.currentHeight || 0) + chatInputHeight)
    : 0

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={os === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardOffset}
      >
        <ImageBackground
          source={profile && profile.chat_theme ? { uri: profile.chat_theme } : require('../assets/images/wallpaper (59).jpg')}
          resizeMode="cover"
          style={{ flex: 1 }}
        >
          <MessagesSection />
          {!stateApp.openChatSearch && <ChatInputSection onHeightChange={setChatInputHeight} />}
        </ImageBackground>
      </KeyboardAvoidingView>
      <ChooseChatThemeModal />
      <DeleteMessagesModal />
      <BlockModal />
    </View>
  )
}

export default ChatScreen
