import { ChatRoomStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useChatRoomStore = create<ChatRoomStoreTypes>((set, get) => ({
    loading: true,

    room: undefined,

    messages: [],

    setRoom: ({ messages, room }) => set({ messages, room, loading: false }),

    appendMessage: (message) => set((state) => ({ messages: [message, ...state.messages] })),

    getRoom: () => ({ room: get().room, messages: get().messages }),

    clearRoom: () => set({ room: undefined, messages: [] }),
}))
