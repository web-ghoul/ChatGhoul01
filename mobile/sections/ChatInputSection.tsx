import Container from '@/components/Container';
import Input from '@/components/Input';
import useRoom from '@/hooks/useRoom';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { LayoutChangeEvent, Pressable, View } from 'react-native';

const ChatInputSection = ({ onHeightChange }: {
    onHeightChange?: (height: number) => void
}) => {
    const { handleSendMessage } = useRoom()
    const [message, setMessage] = useState('')

    const handleChange = (value: string) => {
        setMessage(value)
    }

    const handleSend = async () => {
        if (!message.trim()) return
        setMessage("")
        await handleSendMessage(message)
    }

    const handleLayout = (e: LayoutChangeEvent) => {
        const { height } = e.nativeEvent.layout
        if (onHeightChange) onHeightChange(height)
    }

    return (
        <View onLayout={handleLayout}>
            <Container className={`flex flex-row justify-between items-center w-full py-2`} style={{ gap: 4 }}>
                <View className="flex-1">
                    <Input
                        placeholder='Message...'
                        value={message}
                        onChange={handleChange}
                    />
                </View>
                <Pressable onPress={handleSend}>
                    <View className={`bg-primary p-4 flex items-center justify-center rounded-full`}>
                        <MaterialIcons name="send" size={23} color="white" />
                    </View>
                </Pressable>
            </Container>
        </View>
    )
}

export default ChatInputSection
