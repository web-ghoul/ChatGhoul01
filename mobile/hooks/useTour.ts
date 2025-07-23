import { useProfileStore } from "@/store/useProfileStore"
import { router } from "expo-router"
import useAxios from "./useAxios"

const useTour = () => {
  const { server } = useAxios()
  const { setProfile, profile } = useProfileStore((state) => state)

  const handleCompleteTour = async () => {
    await server.put("/users", { tour_status: "completed" }).then(() => {
      if (profile) {
        setProfile({ ...profile, tour_status: "completed" })
      }
      router.push("/(tabs)/chats")
    })
  }

  return { handleCompleteTour }
}

export default useTour
