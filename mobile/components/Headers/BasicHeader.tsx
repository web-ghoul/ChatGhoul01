import { headerHeight } from '@/constants';
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Container from '../Container';

const BasicHeader = ({ head, goTo }: { head: string, goTo?: () => void }) => {
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <Pressable onPress={() => {
                if (goTo) {
                    goTo()
                } else {
                    router.back()
                }
            }}>
                <View className={`flex flex-row justify-center items-center`} style={{ gap: 10 }}>
                    <Entypo name="chevron-left" size={26} color="white" />
                    <Text className={`text-white text-2xl font-ubuntu_bold`}>{head}</Text>
                </View>
            </Pressable>
        </Container>
    )
}

export default BasicHeader
