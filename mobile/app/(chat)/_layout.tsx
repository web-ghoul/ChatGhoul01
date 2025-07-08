import { Stack } from 'expo-router';

export default function chatLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="user" options={{ headerShown: false }} />
        </Stack>
    );
}
