import { Pressable, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Container from "./Container";
import { useApp } from "@/contexts/AppContext";

const MessageCard = ({ item, sender }: { item: number, sender: boolean }) => {
    const { state: stateApp, dispatch: dispatchApp } = useApp()

    const handleRemove = () => {
        const newChosenMessages = { ...stateApp.chosenMessages }
        newChosenMessages[`${item}`] = undefined
        dispatchApp({ type: "chosenMessages", payload: newChosenMessages })
        dispatchApp({ type: "chosenMessagesLength", payload: stateApp.chosenMessagesLength - 1 })
        if (sender) {
            dispatchApp({ type: "chosenMsgsOwnLength", payload: stateApp.chosenMsgsOwnLength - 1 })
        }
    }

    const handleAdd = () => {
        const newChosenMessages = { ...stateApp.chosenMessages, [`${item}`]: `${item}` }
        dispatchApp({ type: "chosenMessages", payload: newChosenMessages })
        dispatchApp({ type: "chosenMessagesLength", payload: stateApp.chosenMessagesLength + 1 })
        if (sender) {
            dispatchApp({ type: "chosenMsgsOwnLength", payload: stateApp.chosenMsgsOwnLength + 1 })
        }
    }

    const handleLongPress = () => {
        if (stateApp.chosenMessages[`${item}`]) {
            handleRemove()
        } else {
            handleAdd()
        }
    }

    const handlePress = () => {
        console.log(stateApp, item)
        if (stateApp.chosenMessagesLength > 0) {
            if (stateApp.chosenMessages[`${item}`]) {
                console.log(1)
                handleRemove()
            } else {
                console.log(2)
                handleAdd()
            }
        }
    }

    return (
        <Pressable onLongPress={handleLongPress} onPress={handlePress}>
            <Container className={`${stateApp.chosenMessages[`${item}`] && "bg-blue-50"}`}>
                <View className={`${sender ? "bg-[#111]" : "bg-[#222]"} py-2 px-4 rounded-xl flex items-start border-b-[2px] border-b-primary border-solid w-fit`} style={{
                    alignSelf: sender ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    marginVertical: 4,
                    gap: 1
                }}>
                    <Text className='text-white text-lg font-ubuntu_medium self-start pr-4'>Hello webGhoul {item}!</Text>
                    <View className={`flex flex-row justify-end items-end self-end`} style={{ gap: 3 }}>
                        <Text className='text-gray-300 text-sm font-ubuntu_light self-end'>16:45</Text>
                        {
                            sender && <Ionicons name="checkmark-outline" size={17} color="#999" />
                        }
                    </View>
                </View>
            </Container>
        </Pressable>
    )
}

{/* <Ionicons name="checkmark-done-outline" size={18} color="#999" /> */ }

export default MessageCard
