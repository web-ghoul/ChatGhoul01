import { os } from "@/constants";
import { ReactNode } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";


export default function CustomKeyboardView({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <KeyboardAvoidingView
            behavior={os === "ios" ? "padding" : "height"}
            className="flex-1"
            keyboardVerticalOffset={os === "ios" ? 80 : 0}
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className={`flex-1 justify-center items-center ${className ?? ''}`}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}