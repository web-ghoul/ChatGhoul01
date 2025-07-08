import AvatarCard from '@/components/AvatarCard'
import { avatars, height } from '@/constants'
import React from 'react'
import { FlatList, View } from 'react-native'

const ChooseAvatarSection = () => {
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
