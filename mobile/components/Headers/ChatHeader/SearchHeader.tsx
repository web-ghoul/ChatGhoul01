import React, { useEffect, useRef, useState } from 'react'
import { headerHeight } from '@/constants'
import Container from '../../Container';
import Input from '../../Input';
import Entypo from '@expo/vector-icons/Entypo';
import { useApp } from '@/contexts/AppContext';
import { TextInput, TouchableHighlight, View } from 'react-native';

const SearchHeader = () => {
    const { dispatch: dispatchApp } = useApp()
    const [search, setSearch] = useState<string>("")
    const inputRef = useRef<TextInput>(null)

    const handleMsgUp = () => {

    }

    const handleMsgDown = () => {

    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ gap: 4, height: headerHeight }}>
            <View className={`bg-[#333333] flex flex-row items-center rounded-full pr-4`}>
                <Input
                    icon={<Entypo name="chevron-left" size={24} color="white" />}
                    iconClick={() => dispatchApp({ type: "openChatSearch", payload: false })}
                    value={search}
                    onChange={(value) => setSearch(value)}
                    inputRef={inputRef}
                />
                <View className={`flex flex-row justify-center items-center gap-4`} style={{ gap: 20 }}>
                    <TouchableHighlight onPress={handleMsgUp}>
                        <Entypo name="chevron-up" size={24} color="white" />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={handleMsgDown}>
                        <Entypo name="chevron-down" size={24} color="white" />
                    </TouchableHighlight>
                </View>
            </View>
        </Container>
    )
}

export default SearchHeader
