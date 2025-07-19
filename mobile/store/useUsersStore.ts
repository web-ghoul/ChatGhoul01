import { UsersStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useUsersStore = create<UsersStoreTypes>((set, get) => ({
    loading: true,
    users: [],

    setUsers: (users) => set({ users, loading: false }),

    appendUsers: (newUsers) => set({ users: [...get().users, ...newUsers] }),

    getUsers: () => get().users,

    clearUsers: () => set({ users: [] }),
}))
