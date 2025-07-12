import { width } from '@/constants'
import { useApp } from '@/contexts/AppContext'
import { AvatarTypes } from '@/types/app'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'

const AvatarCard = ({ avatar }: { avatar: AvatarTypes }) => {
    const { state: stateApp, dispatch: dispatchApp } = useApp()

    const chosen = stateApp.chosenAvatar === `${avatar.url}`
    return (
        <TouchableHighlight className={`rounded-full overflow-hidden `} onPress={() => {
            dispatchApp({ type: "chosenAvatar", payload: `${avatar.url}` })
        }}>
            <View className={`rounded-full overflow-hidden relative`} >
                <Image source={{ uri: avatar.url }} className={`rounded-full hover:cursor-pointer overflow-hidden border-[2px] border-solid ${chosen ? "border-primary" : "border-transparent"}`} style={{ width: width * 0.35, height: width * 0.35 }} />

                <View className={`absolute top-0 left-0 rounded-full w-full h-full ${chosen && "bg-[rgba(0,0,0,.25)]"} flex items-center justify-center`}>
                    {chosen && <Feather name="check" size={30} color="#0092E4" />}
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default AvatarCard
