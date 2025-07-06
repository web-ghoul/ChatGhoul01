import { Stack } from 'expo-router';

export default function profileLayout() {
    return (
        <Stack>
            <Stack.Screen name="profile" options={{ headerShown: false }} />
            <Stack.Screen name="update_username" options={{ headerShown: false }} />
            <Stack.Screen name="update_email" options={{ headerShown: false }} />
            <Stack.Screen name="update_about" options={{ headerShown: false }} />
            <Stack.Screen name="update_gender" options={{ headerShown: false }} />
            <Stack.Screen name="update_phone" options={{ headerShown: false }} />
        </Stack>
    );
}
