import { MessageTypes } from '@/types/app'
import { RoomStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useRoomStore = create<RoomStoreTypes>((set, get) => ({
    loading: true,
    messages: [],
    room: undefined,
    messagesMap: {},

    setMessages: (messages) => set({ messages, loading: false }),

    setRoom: (room) => set({ room, loading: false }),

    getMessages: () => get().messages,

    appendMessages: (messages) => set(() => {
        let newMessages: { [key: string]: MessageTypes } = {}
        messages.map((message) => {
            newMessages = { ...newMessages, [message._id]: message }
        })
        return { messages: [...get().messages, ...messages], messagesMap: { ...get().messagesMap, ...newMessages } }
    }),

    addMessage: (message) => set({ messages: [...get().messages, message], messagesMap: { ...get().messagesMap, [message._id]: message } }),

    replaceMessage: (message) => set(() => {
        const msgs = [...get().messages]
        for (let i = 0; i < msgs.length; i++) {
            if (msgs[i]._id.includes(":")) {
                if ((i === msgs.length - 1 || (i < msgs.length - 1 && !msgs[i + 1]._id.includes(":")))) {
                    msgs[i] = message
                    break;
                }
            }
        }
        return { messages: msgs, messagesMap: { ...get().messagesMap, [message._id]: message } }
    }),

    addMessageToMap: (message) => set({ messagesMap: { ...get().messagesMap, [message._id]: message } }),

    deleteMessages: (messages) => set(() => {
        let msgs = [...get().messages]
        let msgsMap = { ...get().messagesMap }
        msgs = msgs.filter((msg) => !messages.includes(msg._id))
        messages.map((id) => {
            delete msgsMap[id]
        })
        return { messages: msgs, messagesMap: msgsMap }
    }),

    clearMessages: () => set({ messages: [], messagesMap: {}, room: undefined }),
}))
