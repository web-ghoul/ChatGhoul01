import ChatInfo from '@/components/ChatInfo'
import MessageCard from '@/components/MessageCard'
import useRoom from '@/hooks/useRoom'
import { useChatRoomStore } from '@/store/useChatRoomStore'
import { ChatRoomTypes, MessageTypes } from '@/types/app'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { useEffect } from 'react'
import { FlatList, View } from 'react-native'

const MessagesSection = () => {
    const { handleFetchRoom } = useRoom()
    const { setRoom, loading, messages } = useChatRoomStore((state) => state)
    const { id } = useLocalSearchParams()

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['chat-rooms', id],
        queryFn: ({ pageParam }) => handleFetchRoom({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < 10) return undefined;
            return allPages.length + 1;
        },
        initialPageParam: 1,
    });

    useEffect(() => {
        if (data?.pages) {
            const allData = data.pages.flat().filter(Boolean);
            console.log(allData, '122')
            setRoom(allData[0] as unknown as { messages: MessageTypes[], room: ChatRoomTypes })
        }
    }, [data]);

    const loadMore = () => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    };

    return !loading && messages && messages.length > 0 && (
        <View style={{ flex: 1 }}>
            <FlatList
                contentContainerStyle={{ paddingVertical: 10 }}
                data={messages.map((message) => message)}
                inverted
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <MessageCard data={item} />}
                ListFooterComponent={
                    <ChatInfo loading={isFetchingNextPage} />
                }
                onEndReached={messages.length >= 10 ? loadMore : () => { }}
                onEndReachedThreshold={0.3}
            />
        </View>
    )
}

export default MessagesSection
