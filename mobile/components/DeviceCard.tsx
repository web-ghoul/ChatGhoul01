import { width } from '@/constants'
import { Image, Text, View } from 'react-native'

const DeviceCard = () => {
    return (
        <View className={`flex flex-row items-center justify-start w-full`} style={{ gap: 20 }}>
            <View className={`bg-[#333] flex justify-center items-center rounded-full`} style={{ width: width * 0.125, height: width * 0.125 }}>
                <Image source={require("../assets/images/link_devices.png")} style={{ width: width * 0.065, height: width * 0.065 }} />
            </View>
            <View className={`flex flex-col items-start justify-center`} style={{ gap: 4 }}>
                <Text className={`text-xl font-ubuntu_regular text-white`}>Home</Text>
                <Text className={`text-md font-ubuntu_light text-gray-400`}>Last active yesterday at 18:15</Text>
            </View>
        </View>
    )
}

export default DeviceCard
