import Container from '@/components/Container'
import { width } from '@/constants'
import { useModals } from '@/contexts/ModalsContext'
import EditAvatarModal from '@/modals/EditAvatarModal'
import RemoveAvatarModal from '@/modals/RemoveAvatarModal'
import ViewAvatarModal from '@/modals/ViewAvatarModal'
import { Image, Text, TouchableWithoutFeedback } from 'react-native'

const AvatarSection = () => {
    const { dispatch: dispatchModals } = useModals()

    return (
        <Container className={`flex flex-col justify-center items-center`} style={{ gap: 20 }}>
            <TouchableWithoutFeedback onPress={() => dispatchModals({ type: "viewAvatarModal", payload: true })}>
                <Image source={require("../assets/images/avatar.png")} className={`rounded-full border-[1px] border-[#222222] border-solid m-auto`} style={{ width: width * 0.45, height: width * 0.45 }} />
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
