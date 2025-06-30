import { Stack } from 'expo-router';

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen name="forgotpassword" options={{ headerShown: false }} />
        </Stack>
    );
}
