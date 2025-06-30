import React from 'react'
import { usePathname } from 'expo-router';
import ChatsHeader from './ChatsHeader';
import ProfileHeader from './ProfileHeader';
import ChatHeader from './ChatHeader';

const Header = () => {
    const pathname = usePathname();

    return pathname === "/" ? (
        <ChatsHeader />
    ) : pathname === "/profile" ? (
        <ProfileHeader />
    ) : pathname === "/chat" ? (
        <ChatHeader />
    ) : (<></>)
}

export default Header
