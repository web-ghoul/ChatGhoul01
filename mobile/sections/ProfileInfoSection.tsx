import Container from '@/components/Container';
import Divider from '@/components/Divider';
import ProfileInfoCard from '@/components/ProfileInfoCard';
import { useProfileStore } from '@/store/useProfileStore';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import React from 'react';

const ProfileInfoSection = () => {
    const { profile } = useProfileStore((state) => state)

    return profile && (
        <Container className={`flex flex-col items-center w-full`} style={{ gap: 10 }}>
            <ProfileInfoCard icon={<AntDesign name="user" size={22} color="white" />} title={"Username"} value={profile.username} handle={() => router.push("/(tabs)/(profile)/update_username")} />
            <Divider />
            <ProfileInfoCard icon={<Ionicons name="mail-outline" size={22} color="white" />} title={"Email"} value={profile.email} handle={() => router.push("/(tabs)/(profile)/update_email")} />
            <Divider />
            <ProfileInfoCard icon={<Feather name="phone" size={22} color="white" />} title={"Phone Number"} value={profile.phone} handle={() => router.push("/(tabs)/(profile)/update_phone")} />
            <Divider />
            <ProfileInfoCard icon={<Feather name="info" size={22} color="white" />} title={"About"} value={profile.about || "-"} handle={() => router.push("/(tabs)/(profile)/update_about")} />
            <Divider />
            <ProfileInfoCard icon={<FontAwesome name="transgender" size={22} color="white" />} title={"Gender"} value={profile.gender} handle={() => router.push("/(tabs)/(profile)/update_gender")} />
        </Container>
    )
}

export default ProfileInfoSection
