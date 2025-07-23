import ChatCard from '@/components/ChatCard'
import ChatsSearch from '@/components/ChatsSearch'
import Container from '@/components/Container'
import { height, width } from '@/constants'
import useChats from '@/hooks/useChats'
import { useChatRoomsStore } from '@/store/useChatRoomsStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import LottieView from 'lottie-react-native'
import React from 'react'
import { ActivityIndicator, FlatList, Text, TouchableHighlight, View } from 'react-native'

const ChatsSection = () => {
    const { handleFetchChats } = useChats()
    const { rooms } = useChatRoomsStore((state) => state)

    const { fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['chat-rooms'],
        queryFn: ({ pageParam }) => handleFetchChats({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage && lastPage.length < 10) return undefined;
            return allPages.length + 1;
        },
        initialPageParam: 1,
    });

    const loadMore = () => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    };



    return rooms.length > 0 ? (
        <LinearGradient colors={['#000', '#111', '#222']} end={{ x: 0, y: 0.5 }} className='flex-1'>
            <Container style={{ gap: 10 }}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: 10 }}
                    data={rooms.map((room) => room)}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) => <ChatCard data={item} />}
                    ListHeaderComponent={
                        <ChatsSearch />
                    }
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.3}
                    ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color="#999" /> : null}
                />
            </Container>
        </LinearGradient>
    ) : (
        <View className={`flex-1 flex-col justify-center items-center content-center`}>
            <View className={`flex justify-center items-center`}>
                <LottieView
                    source={require('../assets/images/no_data.json')}
                    autoPlay
                    loop
                    style={{ width: width * 0.65, height: height * 0.35 }}
                />
            </View>
            <View className={`flex flex-col justify-center items-center`} style={{ gap: 10 }}>
                <Text className={`text-3xl text-white font-ubuntu_medium`}>No Chats...</Text>
                <TouchableHighlight onPress={() => {
                    router.push("/users")
                }}>
                    <View className={`px-5 py-3 rounded-full flex justify-center items-center bg-primary`}>
                        <Text className={`text-white text-xl font-ubuntu_regular`}>Make Freindships</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default ChatsSection
