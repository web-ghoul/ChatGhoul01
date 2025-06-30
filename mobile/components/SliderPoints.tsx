import React from 'react'
import { View } from 'react-native'

const SliderPoints = ({ index }: { index: number }) => {
    return (
        <View className={`flex flex-row items-center`} style={{ gap: 10 }}>
            {
                Array.from({ length: 3 }).map((_, i) =>
                    <View key={i} className={`rounded-full ${index === i ? "bg-primary" : "bg-[#333333]"}`} style={{ width: 10, height: 10, borderRadius: 100 }} />
                )
            }
        </View>
    )
}

export default SliderPoints
