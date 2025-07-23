import { UsersStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useUsersStore = create<UsersStoreTypes>((set, get) => ({
    loading: true,
    users: [],
    user: undefined,

    setUsers: (users) => set({ users, loading: false }),

    setUser: (user) => set({ user, loading: false }),

    getUsers: () => get().users,

    appendUsers: (newUsers) => set({ users: [...get().users, ...newUsers] }),

    removeUser: (id) => set({ users: [...get().users.filter((user) => user._id !== id)] }),

    clearUsers: () => set({ users: [] }),
}))
