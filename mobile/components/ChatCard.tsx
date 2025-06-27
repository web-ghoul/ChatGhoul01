import { width } from '@/constants'
import React from 'react'
import { Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const ChatCard = ({ data }: { data: number }) => {
  return (
    <View className='flex flex-row justify-center items-center' style={{ gap: 10 }}>
      <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={{ width: width * 0.15, height: width * 0.15 }}>
        <Feather name="user" size={26} color="white" />
      </View>
      <View className={`flex-1 flex-col justify-center items-start`} style={{ gap: 1 }}>
        <View className={`flex-1 flex-row justify-between items-center w-full`} style={{ gap: 10 }}>
          <Text className={`text-white text-xl font-ubuntu_bold`}>Mahmoud Ali</Text>
          <Text className={`text-zinc-400 text-md font-ubuntu_light`}>17/06/2025</Text>
        </View>
        <Text className={`text-gray-400 text-lg font-ubuntu_medium`}>Hello {data}...</Text>
      </View>
    </View>
  )
}

export default ChatCard
