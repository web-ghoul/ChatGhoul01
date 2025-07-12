import ChatThemeCard from '@/components/ChatThemeCard'
import { height } from '@/constants'
import useChatThemes from '@/hooks/useChatThemes'
import { useChatThemesStore } from '@/store/useChatThemesStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

const ChooseChatThemeSection = () => {
    const { handleFetchChatThemes } = useChatThemes()
    const { chatThemes, setChatThemes } = useChatThemesStore();

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['chatThemes'],
        queryFn: ({ pageParam }) => handleFetchChatThemes({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < 10) return undefined;
            return allPages.length + 1;
        },
        initialPageParam: 1,
    });

    useEffect(() => {
        if (data?.pages) {
            const allChatThemes = data.pages.flat().filter(Boolean);
            setChatThemes(allChatThemes);
        }
    }, [data]);

    const loadMore = () => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    };

    return (
        <View className='flex rounded-xl overflow-hidden' style={{ height: height * 0.625 }}>
            <FlatList
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                data={chatThemes || []}
                numColumns={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <ChatThemeCard chatTheme={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.3}
                ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color="#999" /> : null}
            />
        </View>
    )
}

export default ChooseChatThemeSection
