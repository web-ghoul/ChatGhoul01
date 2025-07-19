import { useChatRoomStore } from "@/store/useChatRoomStore";
import { useProfileStore } from "@/store/useProfileStore";
import { useLocalSearchParams } from "expo-router";
import useAxios from "./useAxios";

const useRoom = () => {
    const { server } = useAxios()
    const { id } = useLocalSearchParams()
    const { profile } = useProfileStore((state) => state)
    const { appendMessage, room } = useChatRoomStore((state) => state)

    console.log(id)

    const handleFetchRoom = async ({ pageParam = 1 }) => {
        try {
            const res = await server.get(`/chat-rooms/${id}?page=${pageParam}&limit=10`);
            console.log(res.data.data)
            return res.data.data || { messages: [], room: undefined };
        } catch (err) {
            console.error("Fetch Chat Room error:", err);
            return [];
        }
    };

    const handleSendMessage = async (msg: string) => {
        try {
            let chatterId = room?.participants[0]._id
            if (room?.participants[0]._id === profile?._id) {
                chatterId = room?.participants[1]._id
            }
            const res = await server.post(`/messages/${chatterId?.toString()}`, {
                msg
            });
            console.log(res.data)
            appendMessage(res.data.data.message)
            return res.data.data || { messages: [], room: undefined };
        } catch (err) {
            console.error("Fetch Chat Room error:", err);
            return [];
        }
    };

    return { handleFetchRoom, handleSendMessage }
}

export default useRoom
