import useAxios from "./useAxios";

const useChats = () => {
    const { server } = useAxios()

    const handleFetchChats = async ({ pageParam = 1 }) => {
        try {
            const res = await server.get(`/chat-rooms?page=${pageParam}&limit=10`);
            console.log(res.data.data)
            return res.data.data || [];
        } catch (err) {
            console.error("Fetch Chat Rooms error:", err);
            return [];
        }
    };

    return { handleFetchChats }
}

export default useChats
