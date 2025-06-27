import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import Logo from './Logo'
import { headerHeight, width } from '@/constants'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

const ChatsHeader = () => {
    return (
        <View className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ height: headerHeight, gap: 4 }}>
            <Logo style={{ width: width * 0.15, height: width * 0.15, background: "#000000" }} textClassName={`text-2xl text-white`} />
            <View className={`flex flex-row justify-center items-center`} style={{ gap: 20 }}>
                <TouchableHighlight>
                    <Feather name="search" size={24} color="white" />
                </TouchableHighlight>
                <TouchableHighlight>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default ChatsHeader
