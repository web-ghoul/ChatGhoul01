import Container from '@/components/Container'
import { height, width } from '@/constants'
import LottieView from 'lottie-react-native'
import { Text, View } from 'react-native'

const MakeAppReadySection = () => {
    return (
        <Container className={`flex-1 justify-center items-center`}>
            <View className={`flex justify-center items-center`}>
                <LottieView
                    source={require('../assets/images/ready.json')}
                    autoPlay
                    loop
                    style={{ width: width * 0.85, height: height * 0.40 }}
                />
            </View>
            <View>
                <Text className={`text-white font-ubuntu_bold text-4xl text-center`}><Text className={`text-primary`}>App</Text> will be ready in a <Text className={`text-primary`}>Minute</Text>.</Text>
            </View>
        </Container>
    )
}

export default MakeAppReadySection
