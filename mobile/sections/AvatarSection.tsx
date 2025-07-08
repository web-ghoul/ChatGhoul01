import Container from '@/components/Container'
import { avatars, width } from '@/constants'
import { useApp } from '@/contexts/AppContext'
import { useModals } from '@/contexts/ModalsContext'
import EditAvatarModal from '@/modals/EditAvatarModal'
import RemoveAvatarModal from '@/modals/RemoveAvatarModal'
import ViewAvatarModal from '@/modals/ViewAvatarModal'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

const AvatarSection = () => {
    const { dispatch: dispatchModals } = useModals()
    const { state: stateApp } = useApp()
    const avatarClasses = `rounded-full border-[1px] border-[#222222] border-solid m-auto`
    const avatarStyle = { width: width * 0.45, height: width * 0.45 }

    return (
        <Container className={`flex flex-col justify-center items-center`} style={{ gap: 20 }}>
            <TouchableWithoutFeedback onPress={() => dispatchModals({ type: "viewAvatarModal", payload: true })}>
                {
                    stateApp.chosenAvatar ? <Image source={avatars[+stateApp.chosenAvatar]} className={avatarClasses} style={avatarStyle} /> : stateApp.profileAvatar ? <Image source={stateApp.profileAvatar} className={avatarClasses} style={avatarStyle} /> : <View className={avatarClasses} style={avatarStyle}></View>
                }
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => dispatchModals({ type: "editAvatarModal", payload: true })}>
                <Text className={`font-ubuntu_medium text-primary text-xl text-center`}>Edit</Text>
            </TouchableWithoutFeedback>
            <ViewAvatarModal />
            <EditAvatarModal />
            <RemoveAvatarModal />
        </Container>
    )
}

export default AvatarSection
