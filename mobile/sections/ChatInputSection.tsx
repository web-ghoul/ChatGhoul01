import Input from '@/components/Input'
import { useState } from 'react'
import { Pressable, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import useNotifications from '@/hooks/useNotifications';
// import { useApp } from '@/contexts/AppContext';

const ChatInputSection = () => {
    const [message, setMessage] = useState('')
    const { handlePushNotification } = useNotifications()
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
        handlePushNotification()
    }

    return (
        <View className={`flex flex-row items-center w-full py-2`} style={{ gap: 4 }}>
            <Input
                icon={<MaterialCommunityIcons name="sticker-emoji" size={18} color="#999" />}
                placeholder='Message...'
                value={message}
                onChange={handleChange}
            />
            <Pressable onPress={handleSendMessage}>
                <View className={`bg-primary p-4 flex items-center justify-center rounded-full`}>
                    <MaterialIcons name="send" size={23} color="white" />
                </View>
            </Pressable>
        </View>
    )
}

export default ChatInputSection
