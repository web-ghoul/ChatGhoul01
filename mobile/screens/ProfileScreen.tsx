import ChooseAvatarModal from '@/modals/ChooseAvatarModal'
import AvatarSection from '@/sections/AvatarSection'
import React from 'react'
import { View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View className={`flex-1 flex-col justify-stretch items-center py-6`} style={{ gap: 20 }}>
      <AvatarSection />
      <ChooseAvatarModal/>
    </View>
  )
}

export default ProfileScreen
