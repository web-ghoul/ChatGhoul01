import { AvatarTypes, ChatThemeTypes, UserTypes } from "./app";
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



export type { AuthStoreTypes, AvatarsStoreTypes, ChatThemesStoreTypes, ProfileStoreTypes, UsersStoreTypes };

