import { height, width } from '@/constants';
import { useModals } from '@/contexts/ModalsContext';
import useAvatar from '@/hooks/useAvatar';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';

const EditAvatarModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()
    const { handleUpdateAvatarFromDevice } = useAvatar()
    const boxClasses = `border-[#444444] border-[1px] border-solid rounded-xl flex-col justify-center items-center`
    const boxStyles = { gap: 4, paddingHorizontal: 15, paddingVertical: 10, borderRadius: 15, borderColor: "#333333" }

    return (
        <Modal
            isVisible={stateModals.isOpenEditAvatarModal}
            onBackdropPress={() => dispatchModals({ type: "editAvatarModal", payload: false })}
            swipeDirection="down"
            onSwipeComplete={() => dispatchModals({ type: "editAvatarModal", payload: false })}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <View className={`flex flex-col justify-stretch items-stretch bg-[#222222]`} style={{ gap: 20, paddingHorizontal: 20, paddingBottom: 15, paddingTop: 10 }}>
                <View className={`m-auto rounded-full`} style={{ width: width * 0.1, height: height * 0.0075, backgroundColor: "#fff" }} />
                <View className={`flex flex-row justify-between items-center`} style={{ gap: 5 }}>
                    <TouchableWithoutFeedback onPress={() => dispatchModals({ type: "editAvatarModal", payload: false })}>
                        <Ionicons name="close-sharp" size={24} color="gray" />
                    </TouchableWithoutFeedback>
                    <Text className={`text-2xl font-ubuntu_medium text-white`}>Profile Photo</Text>
                    <TouchableWithoutFeedback onPress={() => {
                        dispatchModals({ type: "editAvatarModal", payload: false })
                        dispatchModals({ type: "removeAvatarModal", payload: true })
                    }}>
                        <MaterialIcons name="delete" size={24} color="gray" />
                    </TouchableWithoutFeedback>
                </View>
                <View className={`flex-row justify-between items-center`} style={{ gap: 5 }}>
                    <TouchableWithoutFeedback onPress={handleUpdateAvatarFromDevice}>
                        <View className={boxClasses} style={boxStyles}>
                            <Entypo name="image" size={24} color="#0092E4" />
                            <Text className={`text-lg font-ubuntu_regular text-white`}>Gallery</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                        dispatchModals({ type: "editAvatarModal", payload: false })
                        dispatchModals({ type: "chooseAvatarModal", payload: true })
                    }}>
                        <View className={boxClasses} style={boxStyles}>
                            <MaterialIcons name="face-retouching-natural" size={24} color="#0092E4" />
                            <Text className={`text-lg font-ubuntu_regular text-white`}>Avatar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </Modal>
    )
}

export default EditAvatarModal
