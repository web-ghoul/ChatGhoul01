import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const HeaderMenu = () => {
    const router = useRouter();

    return (
        <Menu>
            <MenuTrigger customStyles={{
                TriggerTouchableComponent: TouchableOpacity,
                triggerWrapper: {
                    padding: 6,
                    borderRadius: 8,
                }
            }}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </MenuTrigger>

            <MenuOptions
                customStyles={{
                    optionsContainer: {
                        padding: 8,
                        borderRadius: 10,
                        backgroundColor: '#222',
                        width: 160,
                    },
                }}
            >
                <MenuOption
                    onSelect={() => router.push("/link-devices")}
                    customStyles={{
                        optionWrapper: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            gap: 10,
                        }
                    }}
                >
                    <MaterialIcons name="devices" size={16} color="white" />
                    <Text className={`text-lg font-ubuntu_regular text-white`}>Linked devices</Text>
                </MenuOption>
                <MenuOption
                    onSelect={() => router.push("/(auth)/login")}
                    customStyles={{
                        optionWrapper: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            gap: 10,
                        }
                    }}
                >
                    <SimpleLineIcons name="logout" size={16} color="red" />
                    <Text className={`text-lg font-ubuntu_regular text-red-600`}>Log out</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    );
};

export default HeaderMenu;
