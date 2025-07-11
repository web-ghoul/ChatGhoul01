import { AuthStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useAuthStore = create<AuthStoreTypes>((set, get) => ({
    auth: { token: undefined },

    setAuth: (auth) => set({ auth: auth }),

    getAuth: () => get().auth,

    clearAuth: () => set({ auth: { token: undefined } }),
}))
