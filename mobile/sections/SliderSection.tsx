import SliderPoints from '@/components/SliderPoints'
import { width } from '@/constants'
import useTour from '@/hooks/useTour'
import { SliderSectionTypes } from '@/types/sections'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Image, Pressable, Text, TouchableHighlight, View } from 'react-native'

const SliderSection = ({ index, image, title, description, scrollToPrev, scrollToNext }: SliderSectionTypes) => {
    const { handleCompleteTour } = useTour()
    return (
        <View className={`flex flex-col items-center py-4 px-8`} style={{ gap: 20, width: width }}>
            <View className={`flex flex-col items-start`}>
                <TouchableHighlight onPress={() => index > 0 ? scrollToPrev() : ''} className='px-4 py-2'>
                    <Feather name="chevrons-left" size={30} color={index === 0 ? "black" : "white"} />
                </TouchableHighlight>
                <Image source={image} style={{ width: width, height: width }} />
            </View>
            <View className={`flex flex-col items-center`} style={{ gap: 30 }}>
                <SliderPoints index={index} />
                <View className={`flex flex-col items-center`} style={{ gap: 10 }}>
                    <Text className={`text-3xl text-primary font-ubuntu_bold text-center`}>{title}</Text>
                    <Text className={`text-white text-xl font-ubuntu_regular text-center text-wrap`}>{description}</Text>
                </View>
                <View className={`flex flex-row justify-between items-center w-full`} style={{ gap: 10 }}>
                    <Pressable className={`border-[1px] border-solid border-primary px-4 py-3 rounded-lg`} onPress={handleCompleteTour}>
                        <Text className={`text-primary text-xl font-ubuntu_regular`}>Skip</Text>
                    </Pressable>
                    <Pressable className={`bg-primary px-4 py-3 rounded-lg`} onPress={() => {
                        if (index < 2) {
                            scrollToNext()
                        } else {
                            handleCompleteTour()
                        }
                    }}>
                        <Ionicons name="chevron-forward" size={24} color="#fff" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default SliderSection
