import { AvatarTypes, ChatRoomTypes, ChatThemeTypes, MessageTypes, UserTypes } from "./app";
interface AuthStoreTypes {
    auth?: { token?: string };
    setAuth: (profile: { token?: string }) => void;
    getAuth: () => { token?: string } | undefined;
    clearAuth: () => void
}

interface ProfileStoreTypes {
    profile?: UserTypes;
    setProfile: (profile: UserTypes) => void;
    getProfile: () => UserTypes | undefined;
    clearProfile: () => void;
};

interface UsersStoreTypes {
    loading: boolean;
    users: UserTypes[];
    user?: UserTypes;
    setUsers: (users: UserTypes[]) => void;
    setUser: (user: UserTypes) => void;
    getUsers: () => UserTypes[];
    appendUsers: (users: UserTypes[]) => void;
    removeUser: (id: string) => void;
    clearUsers: () => void;
}

interface AvatarsStoreTypes {
    avatars: AvatarTypes[];
    setAvatars: (avatars: AvatarTypes[]) => void;
    appendAvatars: (avatars: AvatarTypes[]) => void;
    getAvatars: () => AvatarTypes[];
    clearAvatars: () => void;
};

interface ChatThemesStoreTypes {
    chatThemes: ChatThemeTypes[];
    setChatThemes: (chatThemes: ChatThemeTypes[]) => void;
    appendChatThemes: (chatThemes: ChatThemeTypes[]) => void;
    getChatThemes: () => ChatThemeTypes[];
    clearChatThemes: () => void;
};

interface ChatRoomsStoreTypes {
    loading: boolean
    rooms: ChatRoomTypes[];
    lastMessages: { [key: string]: MessageTypes };
    setRooms: (rooms: ChatRoomTypes[]) => void;
    addRoom: (room: ChatRoomTypes) => void;
    addlastMessage: (id: string, message: MessageTypes) => void;
    topRoom: (id: string) => void;
    clearRooms: () => void;
}

interface RoomStoreTypes {
    loading: boolean;
    room?: ChatRoomTypes;
    messages: MessageTypes[];
    messagesMap: { [key: string]: MessageTypes }
    setRoom: (room: ChatRoomTypes) => void;
    setMessages: (messages: MessageTypes[]) => void;
    appendMessages: (messages: MessageTypes[]) => void;
    addMessage: (message: MessageTypes) => void;
    replaceMessage: (message: MessageTypes) => void;
    addMessageToMap: (message: MessageTypes) => void;
    deleteMessages: (messages: string[]) => void;
    clearMessages: () => void;
};

export type { AuthStoreTypes, AvatarsStoreTypes, ChatRoomsStoreTypes, ChatThemesStoreTypes, ProfileStoreTypes, RoomStoreTypes, UsersStoreTypes };

