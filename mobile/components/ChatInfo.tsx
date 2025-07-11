import { Text, View } from 'react-native'
import ChatDate from './ChatDate'

const ChatInfo = () => {
  return (
    <View className={`flex flex-col items-center pb-4`} style={{ gap: 6 }}>
      <ChatDate date={""} />
      <View className={`text-green-400 flex flex-col items-center justify-center self-center text-center bg-[rgba(0,0,0,0.5)] px-3 py-1 rounded-md m-auto`}>
        <Text className={`text-green-400 text-sm font-ubuntu_light text-center`}>Messages are end-to-end encrypted.</Text>
        <Text className={`text-green-400 text-sm font-ubuntu_light text-center`}>Only people in this chat can read, listen to, or share them.</Text>
      </View>
    </View>
  )
}

export default ChatInfo
