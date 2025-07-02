import React from 'react'
import MessageHeader from './MessageHeader';
import { useApp } from '@/contexts/AppContext';
import DefaultHeader from './DefaultHeader';

const ChatHeader = () => {
    const { state: stateApp } = useApp()

    return stateApp.chosenMessagesLength === 0 ? (
        <DefaultHeader />
    ) : (
        <MessageHeader />
    )
}

export default ChatHeader
