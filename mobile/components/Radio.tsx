import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Radio = ({ press, active, title }: { press: () => void; active: boolean, title: string }) => {
    return (
        <TouchableOpacity
            onPress={press}
            className={`flex-row items-center justify-center`}
            style={{ gap: wp(2) }}
        >
            <View
                className={`border border-primary rounded-full justify-center items-center`}
                style={{ width: wp(4), height: wp(4) }}
            >
                <View
                    className={`${active ? "bg-primary":"bg-white"} rounded-full`}
                    style={{ width: wp(2.6), height: wp(2.6) }}
                />
            </View>
            <Text className={`text-white`}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Radio;