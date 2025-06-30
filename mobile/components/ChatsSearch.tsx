import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const ChatsSearch = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <View className={`flex justify-stretch items-center mb-4`}>
            <View className={`bg-[#333333] rounded-full py-1 px-4 w-full flex-row justify-stretch items-center`} style={{ gap: 10 }}>
                <Feather name="search" size={24} color="#999" />
                <TextInput
                    onChangeText={(value) => {
                        setSearch(value)
                        console.log(value)
                    }}
                    className={`text-white text-xl w-full`}
                    placeholder="Search..."
                    placeholderTextColor={"#999"}
                    keyboardType="web-search"
                    value={search}
                />
            </View>
        </View>
    )
}

export default ChatsSearch
