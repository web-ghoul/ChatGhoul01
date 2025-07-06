import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import TabBarIcon from '@/components/TabBarIcon';
import { TouchableWithoutFeedback, View } from 'react-native';
import { height } from '@/constants';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarShowLabel: false, tabBarStyle: { backgroundColor: "#000000", height: height * 0.07, paddingTop: 25 } }}>
            <Tabs.Screen
                name="index"
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
                name="updates"
                options={{
                    title: 'Updates',
                    headerShown: false,
                    tabBarPosition: "bottom",
                    tabBarButton: (props) => (
                        <TouchableWithoutFeedback onPress={props.onPress}>
                            <View className={`flex justify-center items-center`}>{props.children}</View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ focused }) =>
                        <TabBarIcon icon={<MaterialCommunityIcons name="wechat" size={28} color={"white"} />} title={"Updates"} focused={focused} />,
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
