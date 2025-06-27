import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { headerHeight } from '@/constants'
import Entypo from '@expo/vector-icons/Entypo';
import Container from './Container';
import { router } from 'expo-router';

const ProfileHeader = () => {
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <View className={`flex flex-row justify-center items-center`} style={{ gap: 10 }}>
                <Pressable onPress={() => router.back()}>
                    <Entypo name="chevron-left" size={24} color="white" />
                </Pressable>
                <Text className={`text-white text-2xl font-ubuntu_bold`}>Profile</Text>
            </View>
        </Container>
    )
}

export default ProfileHeader
