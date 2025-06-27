import React, { useEffect } from 'react'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import Logo from '@/components/Logo';

SplashScreen.preventAutoHideAsync();

const MySplashScreen = ({ onReady }: { onReady: () => void }) => {

    useEffect(() => {
        setTimeout(async () => {
            await SplashScreen.hideAsync();
            onReady();
        }, 2500);
    }, []);

    return (
        <View className={`bg-primary_bg flex-1 flex-cols justify-center content-center items-center`}>
            <StatusBar style="dark" />
            <Logo orientation='vertical' textClassName='text-4xl text-primary' />
        </View>
    )
}

export default MySplashScreen
