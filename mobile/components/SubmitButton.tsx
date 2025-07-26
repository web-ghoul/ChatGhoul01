import { height } from '@/constants';
import { useForms } from '@/contexts/FormsContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SubmitButton = ({ value, disabled, handleSubmit }: { value: string; disabled?: boolean; handleSubmit: () => void }) => {
    const { state: stateForms } = useForms()

    return (
        <TouchableOpacity disabled={disabled} onPress={() => {
            if (!stateForms.loading) {
                handleSubmit()
            }
        }} className={`${stateForms.loading ? "bg-primary/50" : "bg-primary"} rounded-full w-full flex justify-center items-center ${disabled ? "opacity-50" : "opacity-100"}`} style={{ height: height * 0.0625 }}>
            {stateForms.loading ?
                <AntDesign name="loading1" className={`animate-spin`} color="white" size={24} />
                : <Text className={`text-white font-ubuntu_regular text-xl`}>{value}</Text>
            }
        </TouchableOpacity>
    )
}

export default SubmitButton
