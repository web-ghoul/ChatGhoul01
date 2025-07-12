import { headerHeight, width } from '@/constants';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Container from '../../Container';
import ChatHeaderMenu from '../ChatHeaderMenu';

const DefaultHeader = () => {
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <View className={`flex flex-row justify-center items-center`} style={{ gap: 10 }}>
                <Pressable onPress={() => router.push("/(tabs)/chats")}>
                    <View className={`flex flex-row items-center`} style={{ gap: 2 }}>
                        <Entypo name="chevron-left" size={24} color="white" />
                        {/* [<Image source={require("../../../assets/images/avatar1.jpg")} style={{ width: width * 0.125, height: width * 0.125 }} className={`rounded-full`} />] */}
                        <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={{ width: width * 0.125, height: width * 0.125 }}>
                            <Feather name="user" size={26} color="white" />
                        </View>
                    </View>
                </Pressable>
                <View className='flex flex-col items-start' style={{ gap: 2 }}>
                    <Text className={`text-white text-xl font-ubuntu_medium`}>+20-1009344881</Text>
                    <Text className={`text-white text-md font-ubuntu_regular`}>Last Seen today at 17:24</Text>
                </View>
            </View>
            <View className={`flex flex-row items-center`} style={{ gap: 4 }}>
                <ChatHeaderMenu />
            </View>
        </Container>
    )
}

export default DefaultHeader
