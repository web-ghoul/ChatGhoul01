import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { router, Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Headers/Header';
import "./global.css"
import { ModalsProvider } from '../contexts/ModalsContext';
import Toast from 'react-native-toast-message';
import { MenuProvider } from 'react-native-popup-menu';
import { AppProvider } from '@/contexts/AppContext';
import { FormsProvider } from '@/contexts/FormsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useSecureStore from '@/hooks/useSecureStore';

export default function RootLayout() {
  const pathname = usePathname()
  const [queryClient] = useState(() => new QueryClient());
  const { handleFetch } = useSecureStore()

  // const handleAuth = async () => {
  //   const token = await handleFetch(`${process.env.EXPO_PUBLIC_TOKEN_STORE}`)
  //   const authRoutes = ['/login', '/register', '/forgotpassword', '/resetpassword']
  //   if (token) {
  //     if (authRoutes.includes(pathname)) {
  //       router.replace("/(tabs)/chats");
  //     }
  //   }
  //   else {
  //     if (!authRoutes.includes(pathname)) {
  //       router.replace("/(auth)/login");
  //     }
  //   }
  // }
  const [fontsLoaded] = useFonts({
    'Ubuntu-Light': require('../assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
  });

  // useEffect(() => {
  //   console.log(pathname)
  //   if (pathname !== "/splash") {
  //     handleAuth()
  //   }
  // }, [pathname])

  if (!fontsLoaded) {
    return ""
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <AppProvider>
          <ModalsProvider>
            <FormsProvider>
              <ThemeProvider value={DarkTheme}>
                <SafeAreaView
                  style={{ flex: 1 }}
                  edges={['top', 'bottom']}
                  className="bg-primary_bg"
                >
                  <Header />
                  <Stack>
                    <Stack.Screen name="splash" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="(chat)" options={{ headerShown: false }} />
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="welcome" options={{ headerShown: false }} />
                  </Stack>
                  <StatusBar style="light" />
                </SafeAreaView>
                <Toast />
              </ThemeProvider>
            </FormsProvider>
          </ModalsProvider>
        </AppProvider>
      </MenuProvider>
    </QueryClientProvider>
  );
}
