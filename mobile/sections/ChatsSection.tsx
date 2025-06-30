import ChatCard from '@/components/ChatCard'
import ChatsSearch from '@/components/ChatsSearch'
import React from 'react'
import { FlatList } from 'react-native'

const ChatsSection = () => {
    return (
        <FlatList
            contentContainerStyle={{ paddingVertical: 10 }}
            data={Array.from({ length: 100 }).map((_, i) => i)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <ChatCard data={item} />}
            ListHeaderComponent={
                <ChatsSearch />
            }
        />
    )
}

export default ChatsSection
