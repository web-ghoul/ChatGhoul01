import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { headerHeight } from '@/constants'
import Entypo from '@expo/vector-icons/Entypo';
import Container from './Container';
import { router } from 'expo-router';

const LinkDevicesHeader = () => {
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <Pressable onPress={() => router.back()}>
                <View className={`flex flex-row justify-center items-center`} style={{ gap: 10 }}>
                    <Entypo name="chevron-left" size={24} color="white" />
                    <Text className={`text-white text-2xl font-ubuntu_bold`}>Link Devices</Text>
                </View>
            </Pressable>
        </Container >
    )
}

export default LinkDevicesHeader
