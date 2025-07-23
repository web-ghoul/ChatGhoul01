import ChatInfo from '@/components/ChatInfo'
import MessageCard from '@/components/MessageCard'
import useRoom from '@/hooks/useRoom'
import useStore from '@/hooks/useStore'
import { useRoomStore } from '@/store/useRoomStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { FlatList, View } from 'react-native'

const MessagesSection = () => {
    const { handleFetchRoom } = useRoom()
    const { messages, room, loading } = useRoomStore((state) => state)
    const { id } = useLocalSearchParams()
    const { handleSetData } = useStore()

    const { fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['chat-rooms', id],
        queryFn: ({ pageParam }) => handleFetchRoom({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage || lastPage.data.messages.length >= lastPage.total) return undefined;
            return allPages.length + 1;
        },
        initialPageParam: 1,
    });

    const loadMore = () => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    };

    useEffect(() => {
        if (messages && room) {
            handleSetData(room._id, messages)
        }
    }, [messages])

    return (
        <View style={{ flex: 1 }}>
            {!loading && messages && messages.length > 0 ? <FlatList
                contentContainerStyle={{ paddingVertical: 10 }}
                data={messages.map((message) => message)}
                inverted
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <MessageCard data={item} />}
                ListFooterComponent={
                    <ChatInfo loading={isFetchingNextPage} />
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.3}
            /> : <ChatInfo />}
        </View>
    )
}

export default MessagesSection
