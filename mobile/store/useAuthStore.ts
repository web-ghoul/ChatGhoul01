import { AuthStoreTypes } from '@/types/stores.t';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';

export const useAuthStore = create<AuthStoreTypes>((set, get) => ({
    auth: { token: undefined },

    setAuth: (auth) => set({ auth: auth }),

    getAuth: () => get().auth,

    clearAuth: () => async () => {
        await AsyncStorage.removeItem(`${process.env.EXPO_PUBLIC_PROFILE_STORE}`);
        await SecureStore.deleteItemAsync(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`);
        set({ auth: { token: undefined } })
    }
}))
