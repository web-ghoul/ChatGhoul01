import { useModals } from '@/contexts/ModalsContext';
import ChooseAvatarSection from '@/sections/ChooseAvatarSection';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const ChooseAvatarModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()

    return (
        <Modal
            isVisible={stateModals.isOpenChooseAvatarModal}
            onBackdropPress={() => dispatchModals({ type: "chooseAvatarModal", payload: false })}
            swipeDirection="down"
            onSwipeComplete={() => dispatchModals({ type: "chooseAvatarModal", payload: false })}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View className={`bg-[#222222]`} style={{ borderRadius: 20, padding: 20, gap: 30 }}>
                <Text className={`text-white text-xl font-ubuntu_regular`}>Choose Avatar</Text>
                <ChooseAvatarSection />
                <View className={`flex flex-row items-center`} style={{ gap: 25, justifyContent: "flex-end" }}>
                    <Pressable onPress={() => dispatchModals({ type: "chooseAvatarModal", payload: false })}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        dispatchModals({ type: "chooseAvatarModal", payload: false })
                        Toast.show({
                            type: 'success',
                            text1: 'Hello 👋',
                            text2: 'Toast is working!',
                        });
                    }}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Choose</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ChooseAvatarModal
