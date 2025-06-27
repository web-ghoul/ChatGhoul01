import React from 'react'
import { usePathname } from 'expo-router';
import ChatsHeader from './ChatsHeader';
import ProfileHeader from './ProfileHeader';

const Header = () => {
    const pathname = usePathname();
    return pathname === "/" ? (
        <ChatsHeader />
    ) : pathname === "/profile" ? (
        <ProfileHeader />
    ) : (
        <></>
    )
}

export default Header
