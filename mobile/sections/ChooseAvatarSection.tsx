import AvatarCard from '@/components/AvatarCard'
import { height } from '@/constants'
import React from 'react'
import { FlatList, View } from 'react-native'

const ChooseAvatarSection = () => {
    const avatars = [
        require(`../assets/images/avatar (1).jpg`),
        require(`../assets/images/avatar (2).jpg`),
        require(`../assets/images/avatar (3).jpg`),
        require(`../assets/images/avatar (4).jpg`),
        require(`../assets/images/avatar (5).jpg`),
        require(`../assets/images/avatar (6).jpg`),
        require(`../assets/images/avatar (7).jpg`),
        require(`../assets/images/avatar (8).jpg`),
        require(`../assets/images/avatar (9).jpg`),
        require(`../assets/images/avatar (10).jpg`),
        require(`../assets/images/avatar (11).jpg`),
        require(`../assets/images/avatar (12).jpg`),
        require(`../assets/images/avatar (13).jpg`),
        require(`../assets/images/avatar (14).jpg`),
        require(`../assets/images/avatar (15).jpg`),
        require(`../assets/images/avatar (16).jpg`),
        require(`../assets/images/avatar (17).jpg`),
        require(`../assets/images/avatar (18).jpg`),
        require(`../assets/images/avatar (19).jpg`),
        require(`../assets/images/avatar (20).jpg`),
        require(`../assets/images/avatar (21).jpg`),
        require(`../assets/images/avatar (22).jpg`),
    ]

    return (
        <View className='flex rounded-xl overflow-hidden' style={{ height: height * 0.625 }}>
            <FlatList
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                data={avatars}
                numColumns={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <AvatarCard avatar={item} index={index} />}
            />
        </View>
    )
}

export default ChooseAvatarSection
