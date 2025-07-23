import { useApp } from "@/contexts/AppContext";
import { useProfileStore } from "@/store/useProfileStore";
import { MessageTypes } from "@/types/app";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import dayjs from "dayjs";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Container from "./Container";

const MessageCard = ({ data }: { data: MessageTypes }) => {
    const { state: stateApp, dispatch: dispatchApp } = useApp()
    const [touch, setTouch] = useState<boolean>(false)
    const { profile } = useProfileStore((state) => state)
    const sender = data.sender._id === profile?._id

    const bg = sender ?
        (touch ? "bg-[rgba(0,146,228,0.5)]" : "bg-[#111]") :
        (touch ? "bg-[rgba(0,146,228,0.5)]" : "bg-[#222]")

    const handleRemove = () => {
        const newChosenMessages = { ...stateApp.chosenMessages }
        newChosenMessages[`${data._id}`] = undefined
        dispatchApp({ type: "chosenMessages", payload: newChosenMessages })
        dispatchApp({ type: "chosenMessagesLength", payload: stateApp.chosenMessagesLength - 1 })
        if (sender) {
            dispatchApp({ type: "chosenMsgsOwnLength", payload: stateApp.chosenMsgsOwnLength - 1 })
        }
    }

    const handleAdd = () => {
        const newChosenMessages = { ...stateApp.chosenMessages, [`${data._id}`]: `${data._id}` }
        dispatchApp({ type: "chosenMessages", payload: newChosenMessages })
        dispatchApp({ type: "chosenMessagesLength", payload: stateApp.chosenMessagesLength + 1 })
        if (sender) {
            dispatchApp({ type: "chosenMsgsOwnLength", payload: stateApp.chosenMsgsOwnLength + 1 })
        }
    }

    const handleLongPress = () => {
        if (stateApp.chosenMessages[`${data._id}`]) {
            handleRemove()
        } else {
            handleAdd()
        }
    }

    const handlePress = () => {
        if (stateApp.chosenMessagesLength > 0) {
            if (stateApp.chosenMessages[`${data._id}`]) {
                handleRemove()
            } else {
                handleAdd()
            }
        }
    }

    const handleStartTouchMsg = () => {
        setTouch(true)
    }

    const handleEndTouchMsg = () => {
        setTouch(false)
    }

    return (
        <Pressable onPressIn={handleStartTouchMsg} onPressOut={handleEndTouchMsg} onLongPress={handleLongPress} onPress={handlePress}>
            <Container className={`${stateApp.chosenMessages[`${data._id}`] && "bg-[rgba(0,146,228,0.5)]"}`}>
                <View className={`${bg} py-2 px-4 rounded-xl flex items-start border-b-[2px] border-b-primary border-solid w-fit`} style={{
                    alignSelf: sender ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    marginVertical: 4,
                    gap: 1
                }}>
                    <Text className='text-white text-lg font-ubuntu_medium self-start pr-4'>{data.msg}</Text>
                    <View className={`flex flex-row justify-end items-end self-end`} style={{ gap: 10 }}>
                        <Text className='text-gray-300 text-sm font-ubuntu_light self-end'>{dayjs(data.updatedAt).format('HH:mm')}</Text>
                        {
                            sender && (data.is_read ? <Ionicons name="checkmark-done" size={17} color="#0092E4FF" /> : data.is_send ? <Ionicons name="checkmark-done" size={17} color="#999" /> : data.is_save ? <Ionicons name="checkmark-outline" size={17} color="#999" /> : <MaterialIcons name="error-outline" size={17} color="#999" />)
                        }
                    </View>
                </View>
            </Container>
        </Pressable>
    )
}

{/* <Ionicons name="checkmark-done-outline" size={18} color="#999" /> */ }

export default MessageCard
