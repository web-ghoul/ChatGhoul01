import Logo from '@/components/Logo';
import useSecureStore from '@/hooks/useSecureStore';
import useStore from '@/hooks/useStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useProfileStore } from '@/store/useProfileStore';
import { UserTypes } from '@/types/app';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const MySplashScreen = () => {
  const [tokenChecked, setTokenChecked] = useState(false);
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const [profileData, setProfileData] = useState<UserTypes | undefined>(undefined);
  const { setProfile } = useProfileStore((state) => state)
  const { setAuth, clearAuth } = useAuthStore((state) => state)
  const { handleFetch, handleDelete } = useSecureStore();
  const { handleGetData,
    handleClearAll
  } = useStore();

  useEffect(() => {
    const checkToken = async () => {
      const token = await handleFetch(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`);
      setAuthToken(token || undefined);
      setAuth({ token: token || undefined })
      const data = await handleGetData(`${process.env.EXPO_PUBLIC_PROFILE_STORE}`);
      setProfile(data)
      setProfileData(data)
      setTokenChecked(true);
      // handleClearAll()
      console.log(token, data)
      if (!token || !data) {
        await handleDelete(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`)
        await handleClearAll()
        clearAuth()
      }
    };
    checkToken();
  }, []);

  useEffect(() => {
    if (!tokenChecked) return;

    SplashScreen.hideAsync();
    console.log(authToken, profileData, Boolean(profileData))
    if (authToken && profileData) {
      if (profileData.tour_status === "undefined") {
        router.replace("/welcome");
      } else {
        router.replace("/(tabs)/chats");
      }
    } else {
      router.replace("/(auth)/login");
    }
  }, [authToken, tokenChecked, profileData]);

  return (
    <View className={`bg-primary_bg flex-1 flex-cols justify-center content-center items-center`}>
      <StatusBar style="dark" />
      <Logo orientation="vertical" textClassName="text-4xl text-primary" />
    </View>
  );
};

export default MySplashScreen;
