import React from 'react'
import { Pressable, Text, TouchableHighlight, View } from 'react-native'
import { headerHeight } from '@/constants'
import Entypo from '@expo/vector-icons/Entypo';
import Container from '../../Container';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useApp } from '@/contexts/AppContext';
import { useModals } from '@/contexts/ModalsContext';

const MessageHeader = () => {
    const { state: stateApp, dispatch: dispatchApp } = useApp()
    const { dispatch: dispatchModals } = useModals()

    const handleReset = () => {
        dispatchApp({ type: "chosenMessages", payload: {} })
        dispatchApp({ type: "chosenMessagesLength", payload: 0 })
        dispatchApp({ type: "chosenMsgsOwnLength", payload: 0 })
    }

    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <Pressable onPress={handleReset}>
                <View className={`flex flex-row items-center`} style={{ gap: 15 }}>
                    <Entypo name="chevron-left" size={24} color="white" />
                    <Text className={`text-white font-ubuntu_medium text-2xl`}>{stateApp.chosenMessagesLength}</Text>
                </View>
            </Pressable>
            <View className={`flex flex-row items-center`} style={{ gap: 40 }}>
                <TouchableHighlight onPress={() => { }}>
                    <MaterialIcons name="content-copy" size={22} color="white" />
                </TouchableHighlight>
                {stateApp.chosenMessagesLength === 1 && stateApp.chosenMsgsOwnLength === stateApp.chosenMessagesLength && <TouchableHighlight onPress={() => { }}>
                    <Feather name="edit" size={22} color="white" />
                </TouchableHighlight>}
                {stateApp.chosenMsgsOwnLength === stateApp.chosenMessagesLength && <TouchableHighlight onPress={() => dispatchModals({ type: "deleteMessagesModal", payload: true })}>
                    <MaterialIcons name="delete-outline" size={26} color="white" />
                </TouchableHighlight>}
            </View>
        </Container>
    )
}

export default MessageHeader
