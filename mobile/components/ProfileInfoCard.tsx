import { ProfileInfoCardTypes } from '@/types/components'
import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

const ProfileInfoCard = ({ icon, title, value, handle }: ProfileInfoCardTypes) => {
    return (
        <TouchableHighlight onPress={handle} className='w-full py-2'>
            <View className={`flex flex-row justify-start items-center w-full`} style={{ gap: 20 }}>
                {icon}
                <View className={`flex flex-col justify-start items-start`} style={{ gap: 4 }}>
                    <Text className={`text-xl font-ubuntu_medium text-white`}>{title}</Text>
                    <Text className={`text-xl text-wrap font-ubuntu_regular text-gray-500`}>{value}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default ProfileInfoCard
