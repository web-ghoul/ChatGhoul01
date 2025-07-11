import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';

const useImagePicker = () => {
    const handlePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });
        if (!result.canceled) {
            return result.assets[0]
        } else {
            Toast.show({
                type: "error",
                text1: "You did not select any image."
            })
        }
        return undefined
    };

    return { handlePickImage }
}

export default useImagePicker
