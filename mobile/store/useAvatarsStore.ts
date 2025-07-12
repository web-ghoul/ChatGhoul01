import { AvatarsStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useAvatarsStore = create<AvatarsStoreTypes>((set, get) => ({
    avatars: [],

    setAvatars: (avatars) => set({ avatars }),

    appendAvatars: (newAvatars) => set({ avatars: [...get().avatars, ...newAvatars] }),

    getAvatars: () => get().avatars,

    clearAvatars: () => set({ avatars: [] }),
}))
