import { useApp } from "@/contexts/AppContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";

const BackDrop = () => {
    const { state: stateApp } = useApp()

    return stateApp.openBackDrop && (
        <View className={`absolute w-full h-full flex justify-center items-center top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[1000]`}>
            <AntDesign name="loading1" className="animate-spin bg-transparent" size={50} color="#0092E4FF" />
        </View>
    )
}

export default BackDrop
