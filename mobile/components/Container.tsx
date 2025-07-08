import React, { ReactNode } from 'react'
import { View } from 'react-native'

const Container = ({ children, className, style, }: { children: ReactNode; className?: string; style?: { [key: string]: string | number } }) => {
    return (
        <View className={`px-2 ${className}`} style={style}>
            {children}
        </View>
    )
}

export default Container
