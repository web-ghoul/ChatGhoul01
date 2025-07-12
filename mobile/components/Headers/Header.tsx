import { router, usePathname } from 'expo-router';
import React from 'react';
import BasicHeader from './BasicHeader';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatsHeader from './ChatsHeader';

const Header = () => {
    const pathname = usePathname();

    console.log(pathname, 123)

    return pathname === "/chats" || pathname === "/users" ? (
        <ChatsHeader />
    ) : pathname === "/profile" ? (
        <BasicHeader head={"Profile"} goTo={() => router.push("/(tabs)/chats")} />
    ) : pathname === "/" ? (
        <ChatHeader />
    ) : pathname === "/link-devices" ? (
        <BasicHeader head={"Link Devices"} goTo={() => router.push("/(tabs)/chats")} />
    ) : pathname === "/update_username" ? (
        <BasicHeader head={"Username"} goTo={() => router.push("/(tabs)/(profile)/profile")} />
    ) : pathname === "/update_email" ? (
        <BasicHeader head={"Email"} goTo={() => router.push("/(tabs)/(profile)/profile")} />
    ) : pathname === "/update_about" ? (
        <BasicHeader head={"About"} goTo={() => router.push("/(tabs)/(profile)/profile")} />
    ) : pathname === "/update_phone" ? (
        <BasicHeader head={"Phone Number"} goTo={() => router.push("/(tabs)/(profile)/profile")} />
    ) : pathname === "/update_gender" ? (
        <BasicHeader head={"Gender"} goTo={() => router.push("/(tabs)/(profile)/profile")} />
    ) : (<></>)
}

export default Header
