import ChatCard from '@/components/ChatCard'
import ChatsSearch from '@/components/ChatsSearch'
import Container from '@/components/Container'
import { height, width } from '@/constants'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import LottieView from 'lottie-react-native'
import React from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'

const ChatsSection = () => {
    return false ? (
        <LinearGradient colors={['#000', '#111', '#222']} end={{ x: 0, y: 0.5 }}>
            <Container style={{ gap: 10 }}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: 10 }}
                    data={Array.from({ length: 100 }).map((_, i) => i)}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => <ChatCard data={item} />}
                    ListHeaderComponent={
                        <ChatsSearch />
                    }
                />
            </Container>
        </LinearGradient>
    ) : (
        <View className={`flex-1 flex-col justify-center items-center content-center`}>
            <View className={`flex justify-center items-center`}>
                <LottieView
                    source={require('../assets/images/no_data.json')}
                    autoPlay
                    loop
                    style={{ width: width * 0.65, height: height * 0.35 }}
                />
            </View>
            <View className={`flex flex-col justify-center items-center`} style={{ gap: 10 }}>
                <Text className={`text-3xl text-white font-ubuntu_medium`}>No Chats...</Text>
                <TouchableHighlight onPress={() => {
                    router.push("/users")
                }}>
                    <View className={`px-5 py-3 rounded-full flex justify-center items-center bg-primary`}>
                        <Text className={`text-white text-xl font-ubuntu_regular`}>Make Freindships</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default ChatsSection
