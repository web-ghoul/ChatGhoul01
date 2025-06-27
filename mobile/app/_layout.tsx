import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import MySplashScreen from '@/screens/MySplashScreen';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import "./global.css"
import { ModalsProvider } from '../contexts/ModalsContext';
import Toast from 'react-native-toast-message';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Light': require('../assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
  });

  const [ready, setReady] = useState(false)

  if (!fontsLoaded) {
    return ""
  }

  if (!ready) {
    return <MySplashScreen onReady={() => setReady(true)} />
  }

  return (
    <ModalsProvider>
      <ThemeProvider value={DarkTheme}>
        <SafeAreaView edges={["top"]} className='bg-primary_bg' />
        <Header />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
      <Toast />
    </ModalsProvider>
  );
}
