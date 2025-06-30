import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChatHeaderMenu = () => {
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
                    onSelect={() => { }}
                    customStyles={{
                        optionWrapper: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            gap: 10,
                        }
                    }}
                >
                    <Ionicons name="search" size={16} color="#fff" />
                    <Text className={`text-lg font-ubuntu_regular text-white`}>Search</Text>
                </MenuOption>
                <MenuOption
                    onSelect={() => { }}
                    customStyles={{
                        optionWrapper: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            gap: 10,
                        }
                    }}
                >
                    <MaterialCommunityIcons name="qqchat" size={16} color="#fff" />
                    <Text className={`text-lg font-ubuntu_regular text-white`}>Chat Theme</Text>
                </MenuOption>
                <MenuOption
                    onSelect={() => { }}
                    customStyles={{
                        optionWrapper: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 10,
                            gap: 10,
                        }
                    }}
                >
                    <MaterialIcons name="block" size={16} color="red" />
                    <Text className={`text-lg font-ubuntu_regular text-red-600`}>Block</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    );
};

export default ChatHeaderMenu;
