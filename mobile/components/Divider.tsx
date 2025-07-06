import React from 'react'
import { View } from 'react-native'

const Divider = ({ className }: { className?: string }) => {
    return (
        <View className={`w-full h-[1px] bg-[#111] ${className}`}>
        </View>
    )
}

export default Divider