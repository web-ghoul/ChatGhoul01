import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TabBarIcon from '@/components/TabBarIcon';
import { TouchableWithoutFeedback, View } from 'react-native';
import { height } from '@/constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: "#000000", height: height * 0.07, paddingTop: 25 } }}>
            <Tabs.Screen
                name="chats"
                options={{
                    title: 'Chats',
                    headerShown: false,
                    tabBarPosition: "bottom",
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback onPress={props.onPress}>
                            <View className={`flex justify-center items-center`}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) => <TabBarIcon icon={<MaterialCommunityIcons name="chat-processing" size={24} color={"white"} />} title={"Chats"} focused={focused} />
                }}
            />
            <Tabs.Screen
                name="link-devices"
                options={{
                    title: 'Link Devices',
                    headerShown: false,
                    tabBarPosition: "bottom",
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback onPress={props.onPress}>
                            <View className={`flex justify-center items-center`}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon icon={<MaterialIcons name="devices" size={28} color="white" />} title={"Link Devices"} focused={focused} />,
                }}
            />
            <Tabs.Screen
                name="(profile)"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarPosition: "bottom",
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback onPress={props.onPress}>
                            <View className={`flex justify-center items-center`}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon icon={<MaterialCommunityIcons name="face-man" size={28} color="white" />} title={"Profile"} focused={focused} />,
                }}
            />
        </Tabs>
    );
}
