import Container from '@/components/Container'
import DeviceCard from '@/components/DeviceCard'
import Divider from '@/components/Divider'
import { width } from '@/constants'
import LottieView from 'lottie-react-native'
import { ScrollView, Text, TouchableHighlight, View } from 'react-native'

const LinkDevicesScreen = () => {
  return (
    <Container className={`flex flex-col items-center justify-center`}>
      <ScrollView contentContainerStyle={{ gap: 25 }}>
        <View className={`flex flex-col items-center justify-center`} style={{ gap: 20 }}>
          <View className={`flex justify-center content-center items-center`}>
            <LottieView
              source={require('../assets/images/link_devices.json')}
              autoPlay
              loop
              style={{ width: width * 0.5, height: width * 0.4 }}
            />
          </View>
          <View className={`flex flex-col items-center justify-center w-full`} style={{ gap: 10 }}>
            <Text className={`text-center text-xl text-white font-ubuntu_regular`}>0 of 4 devices linked.</Text>
            <TouchableHighlight onPress={() => { }} className={`w-full`}>
              <View className={`flex justify-center items-center bg-primary text-white py-3 rounded-full`}>
                <Text className={`text-white font-ubuntu_medium text-center text-lg`}>Link a device</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <Divider className={`!bg-[#222]`} />
        <View className={`flex flex-col items-center justify-center w-full`} style={{ gap: 20 }}>
          <View className={`flex flex-col items-start justify-center w-full`} style={{ gap: 3 }}>
            <Text className={`text-sm text-gray-400 font-ubuntu_light`}>Linked devices</Text>
            <Text className={`text-md text-gray-400 font-ubuntu_regular`}>Tab a device to edit or remove it.</Text>
          </View>
          <View className={`flex flex-col items-center justify-center w-full`} style={{ gap: 15 }}>
            <DeviceCard />
            <DeviceCard />
            <DeviceCard />
          </View>
        </View>
        <Divider className={`!bg-[#222]`} />
        <Text className={`text-md font-ubuntu_regular text-center text-gray-400`}>Devices can access all account messages. Customers cannot see device names. Change a name anytime.</Text>
      </ScrollView>
    </Container>
  )
}

export default LinkDevicesScreen
