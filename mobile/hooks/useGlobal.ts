import { useForms } from '@/contexts/FormsContext'
import { useModals } from '@/contexts/ModalsContext'
import { useChatRoomsStore } from '@/store/useChatRoomsStore'
import { useProfileStore } from '@/store/useProfileStore'
import { useRoomStore } from '@/store/useRoomStore'
import { useUsersStore } from '@/store/useUsersStore'
import { router } from 'expo-router'
import useAxios from './useAxios'
import useStore from './useStore'

const useGlobal = () => {
    const { server } = useAxios()
    const { dispatch: dispatchForms } = useForms()
    const { dispatch: dispatchModals } = useModals()
    const { handleSetData, handleGetData } = useStore()
    const { setRooms, rooms } = useChatRoomsStore((state) => state)
    const { setRoom, setMessages } = useRoomStore((state) => state)
    const { setUsers, user, users } = useUsersStore((state) => state)
    const { profile } = useProfileStore((state) => state)

    const handleFetchAllData = async () => {
        try {
            await server.get(`/all`).then((res) => {
                const { rooms, messages, users } = res.data
                console.log(rooms.length, Object.keys(messages).length, users.length, profile)
                handleSetData("rooms", rooms)
                setRooms(rooms)
                handleSetData("users", users)
                setUsers(users)
                for (let i = 0; i < Object.keys(messages).length; i++) {
                    const key = Object.keys(messages)[i]
                    handleSetData(key, messages[key])
                }
                router.replace("/(tabs)/chats");
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleMakeChat = async () => {
        try {
            dispatchForms({ type: "loading", payload: true })
            if (!(profile && user && users)) {
                dispatchForms({ type: "loading", payload: false })
                dispatchModals({ type: "readyToChat", payload: false })
                return
            }
            await server.post(`/chat-rooms`, { participants: [profile._id, user._id] }).then(async (res) => {
                const newRoom = res.data.data
                const messages = await handleGetData(`${newRoom._id}`)
                if (!messages) {
                    const newRooms = [newRoom, ...rooms]
                    handleSetData("rooms", newRooms)
                    setRooms(newRooms)
                }
                dispatchForms({ type: "loading", payload: false })
                dispatchModals({ type: "readyToChat", payload: false })
                setRoom(newRoom)
                if (messages) {
                    setMessages(messages)
                } else {
                    await handleSetData(`${newRoom._id}`, [])
                }
                setRoom(newRoom)
                router.push({
                    pathname: "/(chat)/[id]",
                    params: { id: newRoom._id }
                })
            })
            dispatchForms({ type: "loading", payload: false })
            dispatchModals({ type: "readyToChat", payload: false })
        } catch (error) {
            dispatchForms({ type: "loading", payload: false })
            console.log(error)
        }
    }

    return { handleFetchAllData, handleMakeChat }
}

export default useGlobal
