import { os } from "@/constants";
import { ReactNode } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";


export default function CustomKeyboardView({ children }: { children: ReactNode; }) {
    return (
        <KeyboardAvoidingView
            behavior={os === 'ios' ? 'padding' : 'height'}
            className={`flex w-full`}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, width: '100%', gap: 10 }}
                style={{ width: '100%' }}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}