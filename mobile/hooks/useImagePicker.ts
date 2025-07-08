import { useApp } from '@/contexts/AppContext';
import { useModals } from '@/contexts/ModalsContext';
import * as ImagePicker from 'expo-image-picker';

const useImagePicker = () => {
    const { dispatch: dispatchApp } = useApp()
    const { dispatch: dispatchModals } = useModals()

    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            dispatchApp({ type: "profileAvatar", payload: result.assets[0] })
            dispatchModals({ type: "editAvatarModal", payload: false })
        } else {
            alert('You did not select any image.');
        }
    };

    return { handlePickImage }
}

export default useImagePicker
