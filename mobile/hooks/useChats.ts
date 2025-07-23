import { useChatRoomsStore } from "@/store/useChatRoomsStore";
import useAxios from "./useAxios";
import useStore from "./useStore";

const useChats = () => {
    const { server } = useAxios()
    const { setRooms } = useChatRoomsStore((state) => state)
    const { handleGetData } = useStore()

    const handleFetchChats = async ({ pageParam = 1 }) => {
        try {
            const rooms = await handleGetData("rooms")
            if (rooms) {
                setRooms(rooms)
                return
            }
            const res = await server.get(`/chat-rooms?page=${pageParam}&limit=10`);
            setRooms(res.data.data);
            return res.data.data || [];
        } catch (err) {
            console.error("Fetch Chat Rooms error:", err);
            return [];
        }
    };

    return { handleFetchChats }
}

export default useChats
