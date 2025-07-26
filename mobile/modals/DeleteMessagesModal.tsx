import { useApp } from '@/contexts/AppContext';
import { useModals } from '@/contexts/ModalsContext';
import useRoom from '@/hooks/useRoom';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const DeleteMessagesModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()
    const { state: stateApp } = useApp()
    const { handleDeleteMessage } = useRoom()

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
                    <Pressable onPress={handleDeleteMessage}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Delete for me</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteMessagesModal
