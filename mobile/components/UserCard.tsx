import { avatarSize } from '@/constants'
import { UserTypes } from '@/types/app'
import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router'
import { Image, Text, TouchableHighlight, View } from 'react-native'

const UserCard = ({ data }: { data: UserTypes }) => {
    return (
        <TouchableHighlight onPress={() => router.push("/(chat)")}>
            <View className='flex flex-row justify-center items-center my-2' style={{ gap: 10 }}>
                {data.avatar ?
                    <Image className={`bg-[#222222] rounded-full flex justify-center items-center`} style={{ ...avatarSize }} source={{ uri: data.avatar }} />
                    :
                    <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={avatarSize}>
                        <Feather name="user" size={26} color="white" />
                    </View>
                }
                <View className={`flex-1 flex-col justify-center items-start`} style={{ gap: 1 }}>
                    <Text className={`text-white text-xl font-ubuntu_bold`}>{data.username}</Text>
                </View>
            </View>
        </TouchableHighlight >
    )
}

export default UserCard
