import { Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

const MessageCard = ({ item, sender }: { item: number, sender: boolean }) => {
    return (
        <View className={`${sender ? "bg-[#111]" : "bg-[#222]"} py-2 px-4 rounded-xl flex items-start border-b-[2px] border-b-primary border-solid w-fit`} style={{
            alignSelf: sender ? "flex-end" : "flex-start",
            maxWidth: "80%",
            marginVertical: 4,
            gap: 1
        }}>
            <Text className='text-white text-lg font-ubuntu_medium self-start pr-4'>Hello webGhoul {item}!</Text>
            <View className={`flex flex-row justify-end items-end self-end`} style={{ gap: 3 }}>
                <Text className='text-gray-300 text-sm font-ubuntu_light self-end'>16:45</Text>
                {
                    sender && <Ionicons name="checkmark-outline" size={17} color="#999" />
                }
            </View>
        </View>
    )
}

{/* <Ionicons name="checkmark-done-outline" size={18} color="#999" /> */ }

export default MessageCard
