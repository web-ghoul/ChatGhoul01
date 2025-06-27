import { useModals } from '@/contexts/ModalsContext';
import { Modal } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

const ViewAvatarModal = () => {
    const { state: stateModals, dispatch: dispatchModals } = useModals()
    return (
        <Modal visible={stateModals.isOpenViewAvatarModal} transparent animationType="slide">
            <ImageViewing
                images={[require("../assets/images/avatar.png")]}
                imageIndex={0}
                visible={stateModals.isOpenViewAvatarModal}
                onRequestClose={() => dispatchModals({ type: "viewAvatarModal", payload: false })}
            />
        </Modal>
    )
}

export default ViewAvatarModal
