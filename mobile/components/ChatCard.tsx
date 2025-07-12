import { width } from '@/constants'
import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router'
import { Text, TouchableHighlight, View } from 'react-native'

const ChatCard = ({ data }: { data: number }) => {
  const avatarSize = { width: width * 0.15, height: width * 0.15 }

  return (
    <TouchableHighlight onPress={() => router.push("/(chat)")}>
      <View className='flex flex-row justify-center items-center my-2' style={{ gap: 10 }}>
        <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={avatarSize}>
          <Feather name="user" size={26} color="white" />
        </View>
        {/* <Image className={`bg-[#222222] rounded-full flex justify-center items-center`} style={{ ...avatarSize }} source={require(`../assets/images/avatar1.jpg`)} /> */}
        <View className={`flex-1 flex-col justify-center items-start`} style={{ gap: 1 }}>
          <View className={`flex-1 flex-row justify-between items-center w-full`} style={{ gap: 10 }}>
            <Text className={`text-white text-xl font-ubuntu_bold`}>Mahmoud Ali</Text>
            <Text className={`text-zinc-400 text-md font-ubuntu_light`}>17/06/2025</Text>
          </View>
          <Text className={`text-gray-400 text-lg font-ubuntu_regular`}>Hello {data}...</Text>
        </View>
      </View>
    </TouchableHighlight >
  )
}

export default ChatCard
