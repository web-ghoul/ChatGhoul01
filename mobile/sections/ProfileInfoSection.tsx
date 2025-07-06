import ProfileInfoCard from '@/components/ProfileInfoCard'
import React from 'react'
import { router } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Divider from '@/components/Divider';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import Container from '@/components/Container';

const ProfileInfoSection = () => {
    return (
        <Container className={`flex flex-col items-center w-full`} style={{ gap: 10 }}>
            <ProfileInfoCard icon={<AntDesign name="user" size={22} color="white" />} title={"Username"} value={"webGhoul"} handle={() => router.push("/(tabs)/(profile)/update_username")} />
            <Divider />
            <ProfileInfoCard icon={<Feather name="info" size={22} color="white" />} title={"About"} value={"Hello World"} handle={() => router.push("/(tabs)/(profile)/update_about")} />
            <Divider />
            <ProfileInfoCard icon={<Ionicons name="mail-outline" size={22} color="white" />} title={"Email"} value={"mahmoudaboraya2021@gmail.com"} handle={() => router.push("/(tabs)/(profile)/update_email")} />
            <Divider />
            <ProfileInfoCard icon={<FontAwesome name="transgender" size={22} color="white" />} title={"Gender"} value={"Male"} handle={() => router.push("/(tabs)/(profile)/update_gender")} />
            <Divider />
            <ProfileInfoCard icon={<Feather name="phone" size={22} color="white" />} title={"Phone Number"} value={"+201094851646"} handle={() => router.push("/(tabs)/(profile)/update_phone")} />
        </Container>
    )
}

export default ProfileInfoSection
