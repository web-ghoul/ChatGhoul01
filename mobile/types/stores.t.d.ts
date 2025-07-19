import { AvatarTypes, ChatRoomTypes, ChatThemeTypes, MessageTypes, UserTypes } from "./app";
interface AuthStoreTypes {
    auth?: { token?: string };
    setAuth: (profile: { token?: string }) => void;
    getAuth: () => { token?: string } | undefined;
    clearAuth: () => void;
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
    setUsers: (users: UserTypes[]) => void;
    appendUsers: (users: UserTypes[]) => void;
    getUsers: () => UserTypes[];
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
    setRooms: (rooms: ChatRoomTypes[]) => void;
    appendRooms: (rooms: ChatRoomTypes[]) => void;
    getRooms: () => ChatRoomTypes[];
    clearRooms: () => void;
}

interface ChatRoomStoreTypes {
    loading: boolean;
    room?: ChatRoomTypes;
    messages: MessageTypes[];
    setRoom: (room: { room?: ChatRoomTypes; messages: MessageTypes[] }) => void;
    appendMessage: (message: MessageTypes) => void;
    getRoom: () => { room?: ChatRoomTypes, messages: MessageTypes[] };
    clearRoom: () => void;
}


export type { AuthStoreTypes, AvatarsStoreTypes, ChatRoomsStoreTypes, ChatRoomStoreTypes, ChatThemesStoreTypes, ProfileStoreTypes, UsersStoreTypes };

