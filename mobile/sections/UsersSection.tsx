import UserCard from '@/components/UserCard'
import UsersSearch from '@/components/UsersSearch'
import useUsers from '@/hooks/useUsers'
import { useUsersStore } from '@/store/useUsersStore'
import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

const UsersSection = () => {
    const { handleFetchUsers } = useUsers()
    const { setUsers, users } = useUsersStore((state) => state)
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: ({ pageParam }) => handleFetchUsers({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < 10) return undefined;
            return allPages.length + 1;
        },
        initialPageParam: 1,
    });

    useEffect(() => {
        if (data?.pages) {
            const allUsers = data.pages.flat().filter(Boolean);
            setUsers(allUsers);
        }
    }, [data]);

    const loadMore = () => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    };
    return (
        <FlatList
            contentContainerStyle={{ paddingVertical: 10 }}
            data={users.map((user) => user)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <UserCard data={item} />}
            ListHeaderComponent={
                <UsersSearch />
            }
            onEndReached={loadMore}
            onEndReachedThreshold={0.3}
            ListFooterComponent={isFetchingNextPage ? <ActivityIndicator color="#999" /> : null}
        />
    )
}

export default UsersSection
