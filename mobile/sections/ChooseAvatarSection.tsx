import AvatarCard from '@/components/AvatarCard'
import { height } from '@/constants'
import useAvatar from '@/hooks/useAvatar'
import { useAvatarsStore } from '@/store/useAvatarsStore'
import { useProfileStore } from '@/store/useProfileStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

const ChooseAvatarSection = () => {
    const { handleFetchAvatars } = useAvatar()
    const { profile } = useProfileStore();
    const { avatars, setAvatars } = useAvatarsStore();

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['avatars', profile?.gender],
        queryFn: ({ pageParam }) => handleFetchAvatars({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < 10) return undefined;
            return allPages.length + 1;
        },
        initialPageParam: 1,
    });

    useEffect(() => {
        if (data?.pages) {
            const allAvatars = data.pages.flat().filter(Boolean);
            setAvatars(allAvatars);
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
                data={avatars || []}
                numColumns={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <AvatarCard avatar={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.3}
                ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color="#999" /> : null}
            />
        </View>
    )
}

export default ChooseAvatarSection
