import { ChatRoomsStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useChatRoomsStore = create<ChatRoomsStoreTypes>((set, get) => ({
    loading: true,
    rooms: [],

    setRooms: (rooms) => set({ rooms, loading: false }),

    appendRooms: (newRooms) => set({ rooms: [...get().rooms, ...newRooms] }),

    getRooms: () => get().rooms,

    clearRooms: () => set({ rooms: [] }),
}))
