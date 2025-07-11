import Logo from '@/components/Logo';
import { useProfile } from '@/hooks/useProfile';
import useSecureStore from '@/hooks/useSecureStore';
import { useAuthStore } from '@/store/useAuthStore';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const MySplashScreen = () => {
  const [tokenChecked, setTokenChecked] = useState(false);
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const { setAuth } = useAuthStore((state) => state)
  const { handleFetch } = useSecureStore();
  const { isLoading, isError, data } = useProfile(authToken);

  useEffect(() => {
    const checkToken = async () => {
      const token = await handleFetch(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`);
      setAuthToken(token || undefined);
      setAuth({ token: token || undefined })
      setTokenChecked(true);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (!tokenChecked) return;

    SplashScreen.hideAsync();
    if (authToken && !isLoading && data) {
      if (data.tour_status === "undefined") {
        router.replace("/welcome");
      } else {
        router.replace("/(tabs)/chats");
      }
    }

    if (!authToken || isError) {
      router.replace("/(auth)/login");
    }
  }, [authToken, tokenChecked, isLoading, isError, data]);

  return (
    <View className={`bg-primary_bg flex-1 flex-cols justify-center content-center items-center`}>
      <StatusBar style="dark" />
      <Logo orientation="vertical" textClassName="text-4xl text-primary" />
    </View>
  );
};

export default MySplashScreen;
