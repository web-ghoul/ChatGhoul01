import { ProfileTypes } from "./app";

interface ProfileStoreTypes {
    profile?: ProfileTypes;
    setProfile: (profile: ProfileTypes) => void;
    getProfile: () => ProfileTypes | undefined;
    clearProfile: () => void;
};

interface AuthStoreTypes {
    auth?: { token?: string };
    setAuth: (profile: { token?: string }) => void;
    getAuth: () => { token?: string } | undefined;
    clearAuth: () => void;
}

export type { ProfileStoreTypes, AuthStoreTypes }