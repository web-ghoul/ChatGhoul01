import ChatCard from '@/components/ChatCard'
import React from 'react'
import { FlatList, View } from 'react-native'

const ChatsSection = () => {
    return (
        <FlatList
            contentContainerStyle={{ paddingVertical: 10 }}
            ItemSeparatorComponent={() => (
                <View className="py-2" />
            )}
            data={Array.from({ length: 100 }).map((_, i) => i)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <ChatCard data={item} />}
        />
    )
}

export default ChatsSection
