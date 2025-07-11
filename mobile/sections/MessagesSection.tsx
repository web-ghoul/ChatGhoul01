import ChatInfo from '@/components/ChatInfo'
import MessageCard from '@/components/MessageCard'
import { FlatList, View } from 'react-native'

const MessagesSection = () => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={{ paddingVertical: 10 }}
                data={Array.from({ length: 100 }).map((_, i) => i)}
                inverted
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <MessageCard sender={item % 2 === 0} item={item} />}
                ListFooterComponent={
                    <ChatInfo />
                }
            />
        </View>
    )
}

export default MessagesSection
