import { os } from "@/constants";
import React, { ReactNode } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";


export default function CustomKeyboardView({ children }: { children: ReactNode }) {
    return (
        <KeyboardAvoidingView
            behavior={os === "ios" ? "padding" : "height"}
            className={`flex-1 justify-center bg-primary pb-6`}
        >
            <ScrollView
                className={`flex-1`}
                bounces={false}
                showsVerticalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}