import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect, useRef, useState } from 'react';
import MySplashScreen from '@/screens/MySplashScreen';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Headers/Header';
import "./global.css"
import { ModalsProvider } from '../contexts/ModalsContext';
import Toast from 'react-native-toast-message';
import * as SplashScreen from 'expo-splash-screen';
import { MenuProvider } from 'react-native-popup-menu';
import { BackHandler, ToastAndroid } from 'react-native';
import { os } from '@/constants';
import { AppProvider } from '@/contexts/AppContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Light': require('../assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
  });
  const [ready, setReady] = useState(false)
  const navigation = useNavigation();
  const backPressedOnce = useRef(false);

  useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
        return true;
      }

      if (backPressedOnce.current) {
        BackHandler.exitApp();
        return true;
      }

      backPressedOnce.current = true;
      ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);

      setTimeout(() => {
        backPressedOnce.current = false;
      }, 2000);

      return true;
    };

    if (os === 'android') {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => backHandler.remove();
    }
  }, [navigation]);

  if (!fontsLoaded) {
    return ""
  }

  if (!ready) {
    return <MySplashScreen onReady={() => setReady(true)} />
  }

  return (
    <MenuProvider>
      <AppProvider>
        <ModalsProvider>
          <ThemeProvider value={DarkTheme}>
            <SafeAreaView
              style={{ flex: 1 }}
              edges={['top', 'bottom']}
              className="bg-primary_bg"
            >
              <Header />
              <Stack>
                <Stack.Screen name="(chat)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="welcome" options={{ headerShown: false }} />
              </Stack>
              <StatusBar style="auto" />
            </SafeAreaView>
            <Toast />
          </ThemeProvider>
        </ModalsProvider>
      </AppProvider>
    </MenuProvider>
  );
}
