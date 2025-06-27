import AvatarSection from '@/sections/AvatarSection'
import React from 'react'
import { View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View className={`flex-1 flex-col justify-stretch items-center py-6`} style={{ gap: 20 }}>
      <AvatarSection />
    </View>
  )
}

export default ProfileScreen
