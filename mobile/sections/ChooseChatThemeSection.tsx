import ChatThemeCard from '@/components/ChatThemeCard'
import { height, wallpapers } from '@/constants'
import React from 'react'
import { FlatList, View } from 'react-native'

const ChooseChatThemeSection = () => {


    return (
        <View className='flex rounded-xl overflow-hidden' style={{ height: height * 0.625 }}>
            <FlatList
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                data={wallpapers}
                numColumns={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <ChatThemeCard wallpaper={item} index={index} />}
            />
        </View>
    )
}

export default ChooseChatThemeSection
