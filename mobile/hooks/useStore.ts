import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = () => {
    const handleSetData = async (key: string, value: any) => {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }

    const handleGetData = async (key: string) => {
        console.log(key)
        const data = await AsyncStorage.getItem(key);
        console.log(data)
        if (data) {
            return JSON.parse(data)
        }
        return undefined
    }

    const handleClearAll = async () => {
        await AsyncStorage.clear()
    }
    return {
        handleSetData,
        handleGetData,
        handleClearAll
    }
}

export default useStore
