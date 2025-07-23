import { avatarSize, width } from '@/constants'
import { handleDate } from '@/functions/handleDate'
import useStore from '@/hooks/useStore'
import { useChatRoomsStore } from '@/store/useChatRoomsStore'
import { useProfileStore } from '@/store/useProfileStore'
import { useRoomStore } from '@/store/useRoomStore'
import { ChatRoomTypes, UserTypes } from '@/types/app'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router, usePathname } from 'expo-router'
import { useEffect, useState } from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

const ChatCard = ({ data }: { data: ChatRoomTypes; }) => {
  const { lastMessages } = useChatRoomsStore((state) => state)
  const [lastMessage, setLastMessage] = useState(data.lastMessage || undefined)
  const { profile } = useProfileStore((state) => state)
  const { handleGetData, handleSetData } = useStore()
  const { setRoom, setMessages } = useRoomStore((state) => state)
  const pathname = usePathname()

  let chatter: UserTypes = data.participants[0]
  console.log(profile, 1111)
  if (profile && data.participants[0]._id === profile._id) {
    chatter = data.participants[1]
  }

  const handleGetMessages = async () => {
    const messages = await handleGetData(`${data._id}`)
    console.log(messages.length, data._id)
    if (messages) {
      setMessages(messages)
    } else {
      await handleSetData(`${data._id}`, [])
    }
    setRoom(data)
    router.push({
      pathname: "/(chat)/[id]",
      params: { id: data._id }
    })
  }

  const handleGetLastMessage = async () => {
    let message = lastMessages[data._id]
    if (!message) {
      message = await handleGetData(`${data._id}_last_message`)
    }
    setLastMessage(message)
  }

  useEffect(() => {
    handleGetLastMessage()
  }, [pathname, lastMessages])

  return (
    <TouchableHighlight onPress={handleGetMessages}>
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
            <Text className={`text-zinc-400 text-md font-ubuntu_light`}>{handleDate(lastMessage ? lastMessage.updatedAt : data.updatedAt)}
            </Text>
          </View>
          <View className={`flex-row justify-start items-center`} style={{ gap: 4 }}>
            {
              lastMessage && profile && lastMessage.sender._id === profile._id && (lastMessage.is_read ? <Ionicons name="checkmark-done" size={17} color="#0092E4FF" /> : lastMessage.is_send ? <Ionicons name="checkmark-done" size={17} color="#999" /> : lastMessage.is_save ? <Ionicons name="checkmark-outline" size={17} color="#999" /> : <MaterialIcons name="error-outline" size={17} color="#999" />)
            }
            <Text className={`text-gray-400 text-lg font-ubuntu_regular line-clamp-1`} style={{ width: width * 0.65 }}>{lastMessage ? lastMessage.msg : "Start Chat..."}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight >
  )
}

export default ChatCard
