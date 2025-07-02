import { useApp } from '@/contexts/AppContext';
import { useModals } from '@/contexts/ModalsContext';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const DeleteMessagesModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()
    const { state: stateApp } = useApp()

    return (
        <Modal
            isVisible={stateModals.isOpenDeleteMessagesModal}
            onBackdropPress={() => dispatchModals({ type: "deleteMessagesModal", payload: false })}
            swipeDirection="down"
            onSwipeComplete={() => dispatchModals({ type: "deleteMessagesModal", payload: false })}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View className={`bg-[#222222]`} style={{ borderRadius: 20, padding: 20, gap: 30 }}>
                <Text className={`text-white text-xl font-ubuntu_regular`}>Delete {stateApp.chosenMessagesLength} messages ?</Text>
                <View className={`flex flex-row items-center`} style={{ gap: 25, justifyContent: "flex-end" }}>
                    <Pressable onPress={() => dispatchModals({ type: "deleteMessagesModal", payload: false })}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        dispatchModals({ type: "deleteMessagesModal", payload: false })
                        Toast.show({
                            type: 'success',
                            text1: 'Hello 👋',
                            text2: 'Toast is working!',
                        });
                    }}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Delete for me</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteMessagesModal
