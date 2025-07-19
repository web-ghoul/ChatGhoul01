import { Stack } from 'expo-router';

export default function chatLayout() {
    return (
        <Stack>
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
        </Stack>
    );
}
