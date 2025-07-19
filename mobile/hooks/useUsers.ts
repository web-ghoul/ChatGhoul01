import useAxios from "./useAxios";

const useUsers = () => {
    const { server } = useAxios()

    const handleFetchUsers = async ({ pageParam = 1 }) => {
        try {
            const res = await server.get(`/users?page=${pageParam}&limit=10`);
            console.log(res.data.data)
            return res.data.data || [];
        } catch (err) {
            console.error("Fetch Users error:", err);
            return [];
        }
    };

    return { handleFetchUsers }
}

export default useUsers
