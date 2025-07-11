import { useModals } from '@/contexts/ModalsContext';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

const BlockModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()

    return (
        <Modal
            isVisible={stateModals.isOpenBlockModal}
            onBackdropPress={() => dispatchModals({ type: "blockModal", payload: false })}
            swipeDirection="down"
            onSwipeComplete={() => dispatchModals({ type: "blockModal", payload: false })}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View className={`bg-[#222222]`} style={{ borderRadius: 20, padding: 20, gap: 30 }}>
                <Text className={`text-white text-xl font-ubuntu_regular`}>Are you sure for block user ?</Text>
                <View className={`flex flex-row items-center`} style={{ gap: 25, justifyContent: "flex-end" }}>
                    <Pressable onPress={() => dispatchModals({ type: "blockModal", payload: false })}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        dispatchModals({ type: "blockModal", payload: false })
                        Toast.show({
                            type: 'success',
                            text1: 'Hello 👋',
                            text2: 'Toast is working!',
                        });
                        router.push("/(tabs)/chats")
                    }}>
                        <Text className={`text-red-600 text-lg font-ubuntu_light`}>Block</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default BlockModal
