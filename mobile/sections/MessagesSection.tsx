import ChatInfo from '@/components/ChatInfo'
import MessageCard from '@/components/MessageCard'
import { FlatList, View } from 'react-native'

const MessagesSection = () => {
    return (
        <View className='flex-1 w-full'>
            <FlatList
                contentContainerStyle={{ paddingVertical: 5 }}
                data={Array.from({ length: 100 }).map((_, i) => i)}
                inverted
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <MessageCard sender={item % 2 === 0} item={item} />}
                // ItemSeparatorComponent={() => <View className={`py-2`}></View>}
                ListFooterComponent={
                    <ChatInfo />
                }
                keyboardShouldPersistTaps="handled"
            />
        </View>
    )
}

export default MessagesSection
