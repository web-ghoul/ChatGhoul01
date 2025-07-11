import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useProfileStore } from '@/store/useProfileStore';
import { ProfileTypes } from '@/types/app';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

const handleFetchProfile = async (token?: string): Promise<ProfileTypes> => {
    try {
        const res = await axios.get(`${process.env.EXPO_PUBLIC_SERVER_URL}/users/profile`, { headers: { Authorization: `Bearer ${token}` } });
        return res.data.data;
    } catch (error: any) {
        router.push("/(auth)/login")
        Toast.show({
            type: "error",
            text1: error?.response?.data?.message
        })
        throw new Error(error?.response?.data?.message || "Failed to fetch profile");
    }
};

export const useProfile = (enabled?: string) => {
    const { setProfile } = useProfileStore((state) => state);

    const query = useQuery<ProfileTypes, Error>({
        queryKey: ['profile'],
        queryFn: () => handleFetchProfile(enabled),
        enabled: Boolean(enabled),
        retry: false,
    });

    if (query.data) {
        setProfile(query.data);
    }

    return query;
};
