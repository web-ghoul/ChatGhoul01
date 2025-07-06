import React from 'react'
import { usePathname } from 'expo-router';
import ChatsHeader from './ChatsHeader';
import ChatHeader from './ChatHeader/ChatHeader';
import BasicHeader from './BasicHeader';

const Header = () => {
    const pathname = usePathname();

    console.log(pathname)

    return pathname === "/" ? (
        <ChatsHeader />
    ) : pathname === "/profile" ? (
        <BasicHeader head={"Profile"} />
    ) : pathname === "/chat" ? (
        <ChatHeader />
    ) : pathname === "/link-devices" ? (
        <BasicHeader head={"Link Devices"} />
    ) : pathname === "/update_username" ? (
        <BasicHeader head={"Username"} />
    ) : pathname === "/update_email" ? (
        <BasicHeader head={"Email"} />
    ): pathname === "/update_about" ? (
        <BasicHeader head={"About"} />
    ) : pathname === "/update_phone" ? (
        <BasicHeader head={"Phone Number"} />
    ) : pathname === "/update_gender" ? (
        <BasicHeader head={"Gender"} />
    ) : (<></>)
}

export default Header
