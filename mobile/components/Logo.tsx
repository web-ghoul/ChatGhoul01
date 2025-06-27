import { height, width } from '@/constants'
import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';

const Logo = ({ orientation = "horizontal", textClassName, style }: {
    orientation?: "vertical" |
    "horizontal", textClassName?: string; style?: { [key: string]: string | number }
}) => {
    return (
        <View className={`bg-primary_bg flex ${orientation === "horizontal" ? "flex-row" : "flex-col"} justify-center content-center items-center`}>
            <LottieView
                source={require('../assets/images/logo.json')}
                autoPlay
                loop
                style={style || { width: width * 0.74, height: height * 0.74 }}
            />
            <Text className={`font-ubuntu_bold ${textClassName}`} style={{ fontFamily: "Ubuntu-Bold" }}>ChatGhoul</Text>
        </View>

    )
}

export default Logo
