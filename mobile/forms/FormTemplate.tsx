import { FormTemplateTypes } from '@/types/forms'
import { Image, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { os, width } from '@/constants';

const FormTemplate = ({
    image,
    title,
    description,
    children,
}: FormTemplateTypes) => {
    return (
        <KeyboardAvoidingView
            behavior={os === 'ios' ? 'padding' : 'height'}
            className={`flex w-full`}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, width: '100%', gap: 10, paddingBottom: 40 }}
                style={{ width: '100%' }}
            >
                <Image source={image} style={{ width: width * 0.85, height: width * 0.85 }} className={`m-auto`} />
                <View className={`flex flex-col items-center`} style={{ gap: 30 }}>
                    <View className={`flex flex-col items-start w-full`} style={{ gap: 5 }}>
                        <Text className={`font-ubuntu_medium text-4xl text-primary`} >{title}</Text>
                        <Text className={`font-ubuntu_regular text-lg text-white`} >{description}</Text>
                    </View>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default FormTemplate
