import Input from '@/components/Input'
import { useState } from 'react'
import { LayoutChangeEvent, Pressable, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Container from '@/components/Container';
// import { useApp } from '@/contexts/AppContext';

const ChatInputSection = ({ onHeightChange }: {
    onHeightChange?: (height: number) => void
}) => {
    const [message, setMessage] = useState('')
    // const { dispatch: dispatchApp } = useApp()

    // const handleReset = () => {
    //     dispatchApp({ type: "chosenMessages", payload: {} })
    //     dispatchApp({ type: "chosenMessagesLength", payload: 0 })
    //     dispatchApp({ type: "chosenMsgsOwnLength", payload: 0 })
    // }

    const handleChange = (value: string) => {
        console.log(value)
        setMessage(value)
    }

    const handleSendMessage = () => {
        console.log(message)
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
                <Pressable onPress={handleSendMessage}>
                    <View className={`bg-primary p-4 flex items-center justify-center rounded-full`}>
                        <MaterialIcons name="send" size={23} color="white" />
                    </View>
                </Pressable>
            </Container>
        </View>
    )
}

export default ChatInputSection
