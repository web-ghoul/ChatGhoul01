import { router } from "expo-router"
import useAxios from "./useAxios"

const useTour = () => {
  const { server } = useAxios()

  const handleCompleteTour = async () => {
    await server.put("/users", { tour_status: "completed" }).then((res) => {
      console.log(res)
      router.push("/(tabs)/chats")
    })
  }

  return { handleCompleteTour }
}

export default useTour
