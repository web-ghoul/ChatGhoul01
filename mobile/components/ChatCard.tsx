import { avatarSize, width } from '@/constants'
import { handleDate } from '@/functions/handleDate'
import { useProfileStore } from '@/store/useProfileStore'
import { ChatRoomTypes, UserTypes } from '@/types/app'
import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router'
import { Image, Text, TouchableHighlight, View } from 'react-native'


const ChatCard = ({ data }: { data: ChatRoomTypes }) => {
  const { profile } = useProfileStore((state) => state)
  let chatter: UserTypes = data.participants[0]
  if (data.participants[0]._id === profile?._id) {
    chatter = data.participants[1]
  }

  console.log(chatter, "///", data, "////")

  return (
    <TouchableHighlight onPress={() => router.push({
      pathname: "/(chat)/[id]",
      params: { id: data._id }
    })}>
      <View className='flex flex-row justify-center items-center my-2' style={{ gap: 10 }}>
        {
          chatter.avatar ?
            <Image className={`bg-[#222222] rounded-full flex justify-center items-center`} style={{ ...avatarSize }} source={{ uri: chatter.avatar }} />
            :
            <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={avatarSize}>
              <Feather name="user" size={26} color="white" />
            </View>
        }
        <View className={`flex-1 flex-col justify-center items-start`} style={{ gap: 1 }}>
          <View className={`flex-1 flex-row justify-between items-center w-full`} style={{ gap: 10 }}>
            <Text className={`text-white text-xl font-ubuntu_bold`}>{chatter.username}</Text>
            <Text className={`text-zinc-400 text-md font-ubuntu_light`}>{handleDate(data.lastMessage.updatedAt)}
            </Text>
          </View>
          <Text className={`text-gray-400 text-lg font-ubuntu_regular line-clamp-1`} style={{ width: width * 0.65 }}>{data.lastMessage.msg}</Text>
        </View>
      </View>
    </TouchableHighlight >
  )
}

export default ChatCard
