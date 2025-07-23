import { ProfileStoreTypes } from '@/types/stores.t';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

export const useProfileStore = create<ProfileStoreTypes>((set, get) => ({
    profile: undefined,

    setProfile: async (profile) => {
        console.log(profile, 1234)
        await AsyncStorage.setItem(`${process.env.EXPO_PUBLIC_PROFILE_STORE}`, JSON.stringify(profile));
        console.log(profile, 12304)
        set({ profile })
    },

    getProfile: () => get().profile,

    clearProfile: () => set({ profile: undefined }),
}))
