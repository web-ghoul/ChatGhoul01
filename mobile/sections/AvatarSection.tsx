import Container from '@/components/Container'
import { width } from '@/constants'
import { useModals } from '@/contexts/ModalsContext'
import EditAvatarModal from '@/modals/EditAvatarModal'
import RemoveAvatarModal from '@/modals/RemoveAvatarModal'
import ViewAvatarModal from '@/modals/ViewAvatarModal'
import { useProfileStore } from '@/store/useProfileStore'
import Feather from '@expo/vector-icons/Feather'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

const AvatarSection = () => {
    const { profile } = useProfileStore((state) => state)
    const { dispatch: dispatchModals } = useModals()
    const avatarClasses = `rounded-full border-[1px] border-[#222222] border-solid m-auto`
    const avatarStyle = { width: width * 0.45, height: width * 0.45 }

    return (
        <Container className={`flex flex-col justify-center items-center`} style={{ gap: 20 }}>
            <TouchableWithoutFeedback onPress={() => dispatchModals({ type: "viewAvatarModal", payload: true })}>
                {
                    profile && profile.avatar ?
                        <Image source={{ uri: profile.avatar }} className={avatarClasses} style={avatarStyle} /> :
                        <View className={`bg-[#222222] rounded-full flex justify-center items-center`} style={avatarStyle}>
                            <Feather name="user" size={100} color="white" />
                        </View>
                }
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => dispatchModals({ type: "editAvatarModal", payload: true })}>
                <Text className={`font-ubuntu_medium text-primary text-xl text-center`}>Edit</Text>
            </TouchableWithoutFeedback>
            <ViewAvatarModal />
            <EditAvatarModal />
            <RemoveAvatarModal />
        </Container >
    )
}

export default AvatarSection
