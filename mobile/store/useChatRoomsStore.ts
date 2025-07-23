import { ChatRoomsStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useChatRoomsStore = create<ChatRoomsStoreTypes>((set, get) => ({
    loading: true,

    rooms: [],

    lastMessages: {},

    setRooms: (rooms) => set({ rooms, loading: false }),

    addRoom: (room) => set({ rooms: [room, ...get().rooms] }),

    addlastMessage: (id, message) => set({ lastMessages: { ...get().lastMessages, [id]: message } }),

    topRoom: (id) => set(() => {
        let allRooms = get().rooms
        const room = allRooms.find((room) => room._id === id)
        if (room) {
            allRooms = [room, ...allRooms.filter((room) => room._id !== id)]
        }
        return { rooms: allRooms }
    }),

    clearRooms: () => set({ rooms: [] }),
}))
