import { useChatRoomsStore } from '@/store/useChatRoomsStore';
import { useProfileStore } from '@/store/useProfileStore';
import { useRoomStore } from '@/store/useRoomStore';
import { MessageTypes } from '@/types/app';
import { usePathname } from 'expo-router';
import { io } from 'socket.io-client';
import useSound from './useSound';
import useStore from './useStore';

const useSocket = () => {
    const socket = io(`${process.env.EXPO_PUBLIC_BACKEND_URL}`);
    const { handleGetData, handleSetData } = useStore()
    const { setMessages } = useRoomStore((state) => state)
    const { addlastMessage, topRoom, rooms, setRooms } = useChatRoomsStore((state) => state)
    const pathname = usePathname()
    const { handleReceiveMessageSound } = useSound()
    const { profile } = useProfileStore((state) => state)

    const handleConnection = () => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });
    }

    const handleRecieveMessage = async () => {
        socket.on('newMessage', async (data: MessageTypes) => {
            console.log(profile, 123456788)
            const profileData = await handleGetData(`${process.env.EXPO_PUBLIC_PROFILE_STORE}`);
            const arr = pathname.split("/")
            const id = arr[arr.length - 1]
            if (profileData && data.sender._id !== profileData._id) {
                handleReceiveMessageSound()
                const messages = await handleGetData(data.chatRoom._id)
                console.log(messages)
                if (!messages || messages.length === 0) {
                    const newRooms = [data.chatRoom, ...rooms]
                    handleSetData("rooms", newRooms)
                    setRooms(newRooms)
                } else {
                    topRoom(data.chatRoom._id)
                }
                const newMessages = [data, ...messages]
                await handleSetData(data.chatRoom._id, newMessages)
                await handleSetData(`${data.chatRoom._id}_last_message`, data)
                addlastMessage(data.chatRoom._id, data)
                if (id.toString() === data.chatRoom.toString()) {
                    setMessages(newMessages)
                }
            }
        });
    }

    const handleDisconnect = () => {
        socket.disconnect();
    }

    const handleEmitMessage = (message: MessageTypes) => {
        socket.emit('message', message);
    }

    return { handleConnection, handleRecieveMessage, handleDisconnect, handleEmitMessage }
}

export default useSocket
