import UserCard from '@/components/UserCard'
import UsersSearch from '@/components/UsersSearch'
import React from 'react'
import { FlatList } from 'react-native'

const UsersSection = () => {
    return (
        <FlatList
            contentContainerStyle={{ paddingVertical: 10 }}
            data={Array.from({ length: 100 }).map((_, i) => i)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <UserCard data={item} />}
            ListHeaderComponent={
                <UsersSearch />
            }
        />
    )
}

export default UsersSection
