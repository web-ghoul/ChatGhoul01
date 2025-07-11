import * as SecureStore from 'expo-secure-store';

const useSecureStore = () => {

    const handleStore = async (key: string, value: string) => {
        await SecureStore.setItemAsync(key, value);
    };

    const handleFetch = async (key: string): Promise<string | null> => {
        return await SecureStore.getItemAsync(key);
    };

    const handleDelete = async (key: string) => {
        await SecureStore.deleteItemAsync(key);
    };

    return { handleStore, handleFetch, handleDelete }
}

export default useSecureStore
