import { os } from "@/constants";
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useState } from "react";

const useNotifications = () => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
    const [notification, setNotification] = useState<Notifications.Notification | undefined>(
        undefined
    );

    async function registerForPushNotificationsAsync() {
        let token;

        if (os === 'android') {
            await Notifications.setNotificationChannelAsync('myNotificationChannel', {
                name: 'A channel is needed for the permissions prompt to appear',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            try {
                const projectId =
                    Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
                if (!projectId) {
                    throw new Error('Project ID not found');
                }
                token = (
                    await Notifications.getExpoPushTokenAsync({
                        projectId,
                    })
                ).data;
            } catch (e) {
                token = `${e}`;
            }
        } else {
            alert('Must use physical device for Push Notifications');
        }

        return token;
    }

    const handleInitNotifications = () => {
        registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

        if (os === 'android') {
            Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
        }
        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            notificationListener.remove();
            responseListener.remove();
        };
    }

    const handlePushNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: { data: 'goes here', test: { test1: 'more data' } },
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 2,
            },
        });
    }

    return { handleInitNotifications, handlePushNotification, notification, channels, expoPushToken }
}

export default useNotifications
