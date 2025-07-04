import React from 'react'
import { usePathname } from 'expo-router';
import ChatsHeader from './ChatsHeader';
import ProfileHeader from './ProfileHeader';
import ChatHeader from './ChatHeader/ChatHeader';
import LinkDevicesHeader from './LinkDevicesHeader';

const Header = () => {
    const pathname = usePathname();

    return pathname === "/" ? (
        <ChatsHeader />
    ) : pathname === "/profile" ? (
        <ProfileHeader />
    ) : pathname === "/chat" ? (
        <ChatHeader />
    ) : pathname === "/link-devices" ? (
        <LinkDevicesHeader />
    ) : (<></>)
}

export default Header
