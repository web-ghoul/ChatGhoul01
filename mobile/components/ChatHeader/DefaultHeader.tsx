import React from 'react'
import { Image, Pressable, Text, TouchableHighlight, View } from 'react-native'
import { headerHeight, width } from '@/constants'
import Entypo from '@expo/vector-icons/Entypo';
import Container from '../Container';
import { router } from 'expo-router';
import ChatHeaderMenu from '../ChatHeaderMenu';

const DefaultHeader = () => {
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <View className={`flex flex-row justify-center items-center`} style={{ gap: 10 }}>
                <Pressable onPress={() => router.push("/(tabs)")}>
                    <View className={`flex flex-row items-center`} style={{ gap: 2 }}>
                        <Entypo name="chevron-left" size={24} color="white" />
                        <Image source={require("../../assets/images/avatar1.jpg")} style={{ width: width * 0.125, height: width * 0.125 }} className={`rounded-full`} />
                    </View>
                </Pressable>
                <TouchableHighlight onPress={() => router.push("/user")}>
                    <Text className={`text-white text-xl font-ubuntu_medium`}>+20-1009344881</Text>
                </TouchableHighlight>
            </View>
            <View className={`flex flex-row items-center`} style={{ gap: 4 }}>
                <ChatHeaderMenu />
            </View>
        </Container>
    )
}

export default DefaultHeader
