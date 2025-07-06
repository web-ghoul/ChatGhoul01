import ChooseAvatarModal from '@/modals/ChooseAvatarModal'
import AvatarSection from '@/sections/AvatarSection'
import ProfileInfoSection from '@/sections/ProfileInfoSection'
import { ScrollView, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View className={`flex-1 flex-col justify-stretch items-center py-6`} style={{ gap: 20 }}>
        <AvatarSection />
        <ProfileInfoSection />
        <ChooseAvatarModal />
      </View>
    </ScrollView>
  )
}

export default ProfileScreen
