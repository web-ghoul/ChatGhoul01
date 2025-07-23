import { avatarSizeSM, headerHeight, width } from '@/constants';
import { handleLastSeenDate } from '@/functions/handleLastSeenDate';
import { useProfileStore } from '@/store/useProfileStore';
import { useRoomStore } from '@/store/useRoomStore';
import { UserTypes } from '@/types/app';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Container from '../../Container';
import ChatHeaderMenu from '../ChatHeaderMenu';

const DefaultHeader = () => {
    const { profile } = useProfileStore((state) => state)
    const { room } = useRoomStore((state) => state)
    const [chatter, setChatter] = useState<UserTypes | undefined>(room?.participants[0])

    useEffect(() => {
        if (profile && room) {
            if (profile._id === room.participants[0]._id) {
                setChatter(room.participants[1])
            } else {
                setChatter(room.participants[0])
            }
        }
    }, [profile, room])

    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <View className={`flex flex-row justify-center items-center`} style={{ gap: 10 }}>
                <Pressable onPress={() => router.push("/(tabs)/chats")}>
                    <View className={`flex flex-row items-center`} style={{ gap: 2 }}>
                        <Entypo name="chevron-left" size={24} color="white" />
                        {
                            chatter?.avatar ? <Image source={{ uri: chatter.avatar }} style={avatarSizeSM} className={`rounded-full`} /> : <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={{ width: width * 0.125, height: width * 0.125 }}>
                                <Feather name="user" size={26} color="white" />
                            </View>
                        }
                    </View>
                </Pressable>
                <View className='flex flex-col items-start' style={{ gap: 2 }}>
                    <Text className={`text-white text-xl font-ubuntu_medium`}>{chatter?.username}</Text>
                    <Text className={`text-white text-md font-ubuntu_regular`}>{chatter && handleLastSeenDate(new Date(chatter.last_seen))}</Text>
                </View>
            </View>
            <View className={`flex flex-row items-center`} style={{ gap: 4 }}>
                <ChatHeaderMenu />
            </View>
        </Container>
    )
}

export default DefaultHeader
