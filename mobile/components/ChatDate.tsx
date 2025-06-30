import { Text, View } from 'react-native'

const ChatDate = ({ date }: { date: string }) => {
    return (
        <View className={`flex items-center justify-center self-center bg-[rgba(0,0,0,0.5)] px-2 py-1 rounded-md m-autp`}>
            <Text className={`text-gray-300`}>10 October 2024</Text>
        </View>
    )
}

export default ChatDate
