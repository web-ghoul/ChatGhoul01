import { ProfileStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useProfileStore = create<ProfileStoreTypes>((set, get) => ({
    profile: undefined,

    setProfile: (profile) => set({ profile:profile }),

    getProfile: () => get().profile,

    clearProfile: () => set({ profile: undefined }),
}))
