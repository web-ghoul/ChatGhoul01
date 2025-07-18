import { useProfileStore } from '@/store/useProfileStore';
import { ProfileTypes } from '@/types/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { router } from 'expo-router';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

const handleFetchProfile = async (token?: string): Promise<ProfileTypes> => {
    try {
        const profile = await AsyncStorage.getItem(`${process.env.EXPO_PUBLIC_PROFILE_STORE}`);
        if (profile) {
            return JSON.parse(profile)
        }
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

    useEffect(() => {
        if (query.data) {
            setProfile(query.data);
        }
    }, [query.data]);

    return query;
};
