import { useForms } from '@/contexts/FormsContext';
import { useModals } from '@/contexts/ModalsContext';
import useGlobal from '@/hooks/useGlobal';
import { useUsersStore } from '@/store/useUsersStore';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const ReadyToChatModal = () => {
    const { handleMakeChat } = useGlobal()
    const { state: stateModals, dispatch: dispatchModals } = useModals()
    const { state: stateForms } = useForms()
    const { user } = useUsersStore((state) => state)

    return (
        <Modal
            isVisible={stateModals.isOpenReadyToChatModal}
            onBackdropPress={() => dispatchModals({ type: "readyToChat", payload: false })}
            swipeDirection="down"
            onSwipeComplete={() => dispatchModals({ type: "readyToChat", payload: false })}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View className={`bg-[#222222]`} style={{ borderRadius: 20, padding: 20, gap: 30 }}>
                <Text className={`text-white text-xl font-ubuntu_regular`}>Are you want to chat with <Text className={`font-ubuntu_bold`}>{user?.username}</Text> ?</Text>
                <View className={`flex flex-row items-center`} style={{ gap: 25, justifyContent: "flex-end" }}>
                    <Pressable onPress={() => dispatchModals({ type: "readyToChat", payload: false })}>
                        <Text className={`text-white text-lg font-ubuntu_light`}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={handleMakeChat}>
                        {stateForms.loading ? <AntDesign name="loading1" className={`animate-spin`} color="#0092E4FF" size={20} /> : <Text className={`text-primary text-lg font-ubuntu_light`}>Start Chart</Text>}
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ReadyToChatModal
