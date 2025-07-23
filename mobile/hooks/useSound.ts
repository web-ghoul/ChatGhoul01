import { Audio } from 'expo-av';
import { useRef } from "react";

const useSound = () => {
    const soundRef = useRef<Audio.Sound | null>(null);

    const handleReceiveMessageSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/audios/receive.mp3')
        );
        soundRef.current = sound;
        await soundRef.current?.replayAsync();
    }

    return { handleReceiveMessageSound }
}

export default useSound
