import { ChatThemesStoreTypes } from '@/types/stores.t'
import { create } from 'zustand'

export const useChatThemesStore = create<ChatThemesStoreTypes>((set, get) => ({
    chatThemes: [],

    setChatThemes: (chatThemes) => set({ chatThemes }),

    appendChatThemes: (newChatThemes) => set({ chatThemes: [...get().chatThemes, ...newChatThemes] }),

    getChatThemes: () => get().chatThemes,

    clearChatThemes: () => set({ chatThemes: [] }),
}))
