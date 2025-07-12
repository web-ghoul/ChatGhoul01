import { useModals } from '@/contexts/ModalsContext';
import useChatThemes from '@/hooks/useChatThemes';
import ChooseChatThemeSection from '@/sections/ChooseChatThemeSection';
import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const ChooseChatThemeModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()
    const { handleChooseChatTheme } = useChatThemes()

    return (
        <Modal
            isVisible={stateModals.isOpenChooseChatThemeModal}
            onBackdropPress={() => dispatchModals({ type: "chooseChatThemeModal", payload: false })}
            swipeDirection="down"
            onSwipeComplete={() => dispatchModals({ type: "chooseChatThemeModal", payload: false })}
            animationIn="slideInUp"
            animationOut="slideOutDown"
        >
            <View className={`bg-[#222222]`} style={{ borderRadius: 20, padding: 20, gap: 30 }}>
                <Text className={`text-white text-xl font-ubuntu_regular`}>Choose Chat Theme</Text>
                <ChooseChatThemeSection />
                <View className={`flex flex-row items-center`} style={{ gap: 25, justifyContent: "flex-end" }}>
                    <Pressable onPress={() => dispatchModals({ type: "chooseChatThemeModal", payload: false })}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={handleChooseChatTheme}>
                        <Text className={`text-primary text-lg font-ubuntu_light`}>Choose</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ChooseChatThemeModal
