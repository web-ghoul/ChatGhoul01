import { useApp } from "@/contexts/AppContext";
import { useModals } from "@/contexts/ModalsContext";
import { useChatRoomsStore } from "@/store/useChatRoomsStore";
import { useProfileStore } from "@/store/useProfileStore";
import { useRoomStore } from "@/store/useRoomStore";
import { ChatRoomTypes, MessageTypes } from "@/types/app";
import { useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";
import useAxios from "./useAxios";
import useStore from "./useStore";

const useRoom = () => {
    const { server } = useAxios()
    const { id } = useLocalSearchParams()
    const { profile } = useProfileStore((state) => state)
    const { messages, setMessages, appendMessages, setRoom, replaceMessage, room } = useRoomStore((state) => state)
    const { addlastMessage, topRoom } = useChatRoomsStore((state) => state)
    const { handleSetData } = useStore()
    const { dispatch: dispatchModals } = useModals()
    const { state: stateApp, dispatch: dispatchApp } = useApp()

    const handleCaching = (limit: number) => {
        if (messages.length > limit) {
            return true
        }
        return false
    }

    const handleStoreData = (room: ChatRoomTypes, messages: MessageTypes[]) => {
        setMessages(messages)
        setRoom(room)
    }

    const handleFetchRoom = async ({ pageParam = 1 }) => {
        try {
            const limit = pageParam * 20
            if (handleCaching(limit)) return
            const res = await server.get(`/chat-rooms/${id}?page=${pageParam}&limit=20`);
            const { data: { messages: allMessages, room } } = res.data
            appendMessages(allMessages)
            setRoom(room)
            return res.data || { data: { messages: [], room: undefined } };
        } catch (err) {
            console.error("Fetch Chat Room error:", err);
            return [];
        }
    };

    const handleReadMessage = async (id: string) => {
        await server.put(`/messages/read/${id}`)
    }

    const handleSeenMessage = async (id: string) => {
        await server.put(`/messages/seen/${id}`)
    }

    const handleDeleteMessage = async () => {
        try {
            console.log(stateApp.chosenMessages)
            await server.post(`messages/delete`, { messages: stateApp.chosenMessages }).then((res) => {
                console.log(res)
                dispatchModals({ type: "deleteMessagesModal", payload: false })
                dispatchApp({ type: "chosenMessages", payload: {} })
                dispatchApp({ type: "chosenMsgsOwnLength", payload: 0 })
                dispatchApp({ type: "chosenMessagesLength", payload: 0 })

                Toast.show({
                    type: 'success',
                    text1: res.data.message,
                });
            })
        } catch (error) {
            console.log(error)
            Toast.show({
                type: 'error',
                text1: "Server Error",
            });
        }
    }

    const handleSendMessage = async (msg: string) => {
        try {
            if (profile && room) {
                const text = msg.trim()
                const createdAt = new Date()
                const msgId = `${profile._id}:${text}:${room._id}:${new Date(createdAt).getTime()}`

                const message = {
                    _id: msgId,
                    msg: text,
                    chatRoom: room,
                    sender: profile,
                    is_read: false,
                    is_send: false,
                    is_save: false,
                    createdAt,
                    updatedAt: createdAt,
                    deletedAt: undefined
                }

                //Arrays
                let newMessages = [message, ...messages]
                const newRoom = { ...room, lastMessage: message }
                handleStoreData(newRoom, newMessages)
                handleSetData(`${room._id}_last_message`, message)
                addlastMessage(room._id, message)
                topRoom(room._id)

                //Remeber To Save at rooms storages

                let chatterId = room?.participants[0]._id
                if (room?.participants[0]._id === profile?._id) {
                    chatterId = room?.participants[1]._id
                }
                await server.post(`/messages/${chatterId?.toString()}`, {
                    msg: text,
                    createdAt: new Date(message.createdAt)
                }).then((res) => {
                    const data = res.data.data.message
                    replaceMessage(data)
                    // handleEmitMessage(data)
                    handleSetData(`${room._id}_last_message`, data)
                    addlastMessage(room._id as string, data)
                    //Remeber To Save at rooms storages
                })
            }
        } catch (err) {
            console.error("Fetch Chat Room error:", err);
            return [];
        }
    };

    return { handleFetchRoom, handleSendMessage, handleReadMessage, handleSeenMessage, handleDeleteMessage }
}

export default useRoom
