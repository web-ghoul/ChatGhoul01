import ChatThemeCard from '@/components/ChatThemeCard'
import { height } from '@/constants'
import React from 'react'
import { FlatList, View } from 'react-native'

const ChooseChatThemeSection = () => {
    const wallpapers = [
        require(`../assets/images/wallpaper (59).jpg`),
        require(`../assets/images/wallpaper (1).jpg`),
        require(`../assets/images/wallpaper (2).jpg`),
        require(`../assets/images/wallpaper (3).jpg`),
        require(`../assets/images/wallpaper (4).jpg`),
        require(`../assets/images/wallpaper (5).jpg`),
        require(`../assets/images/wallpaper (6).jpg`),
        require(`../assets/images/wallpaper (7).jpg`),
        require(`../assets/images/wallpaper (8).jpg`),
        require(`../assets/images/wallpaper (9).jpg`),
        require(`../assets/images/wallpaper (10).jpg`),
        require(`../assets/images/wallpaper (11).jpg`),
        require(`../assets/images/wallpaper (12).jpg`),
        require(`../assets/images/wallpaper (13).jpg`),
        require(`../assets/images/wallpaper (14).jpg`),
        require(`../assets/images/wallpaper (15).jpg`),
        require(`../assets/images/wallpaper (16).jpg`),
        require(`../assets/images/wallpaper (17).jpg`),
        require(`../assets/images/wallpaper (18).jpg`),
        require(`../assets/images/wallpaper (19).jpg`),
        require(`../assets/images/wallpaper (20).jpg`),
        require(`../assets/images/wallpaper (21).jpg`),
    ]

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
