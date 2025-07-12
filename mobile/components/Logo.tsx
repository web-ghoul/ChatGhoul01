import { height, width } from '@/constants';
import { LogoTypes } from '@/types/components';
import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';

const Logo = ({ orientation = "horizontal", textClassName, style, noTitle, subTitle }: LogoTypes) => {
    return (
        <View className={`bg-primary_bg flex ${orientation === "horizontal" ? "flex-row" : "flex-col"} justify-center content-center items-center`}>
            <LottieView
                source={require('../assets/images/logo.json')}
                autoPlay
                loop
                style={style || { width: width * 0.74, height: height * 0.74 }}
            />
            {!noTitle && <View className={`flex flex-col justify-center items-start`} style={{ gap: 0 }}>
                <Text className={`font-ubuntu_bold ${textClassName}`} style={{ fontFamily: "Ubuntu-Bold" }}>ChatGhoul</Text>
                {subTitle && <Text className={`text-sm text-primary font-ubuntu_regular`} style={{ fontFamily: "Ubuntu-Bold" }}>{subTitle}</Text>}
            </View>}
        </View>

    )
}

export default Logo
