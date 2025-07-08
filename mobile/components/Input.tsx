// Input.tsx
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { InputTypes } from '@/types/components';

const Input = ({
  icon,
  iconClick,
  onChange,
  onBlur,
  value,
  placeholder = "Search...",
  error,
  type,
  inputRef
}: InputTypes) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex flex-col items-start" style={{ gap: 1 }}>
      <View className="bg-[#333333] !rounded-full py-1 px-4 flex flex-row justify-stretch items-center" style={{ gap: 10 }}>
        {
          iconClick ?
            <Pressable onPress={iconClick}>
              {icon}
            </Pressable> :
            <>
              {icon}
            </>
        }
        <TextInput
          ref={inputRef}
          onChangeText={onChange}
          onBlur={onBlur}
          className={`text-white text-xl flex-1`}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          autoComplete={type}
          keyboardType={type === "tel-device" ? "numeric" : "default"}
          secureTextEntry={!showPassword && type === "password"}
        />
        {type === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View className="p-2">
              <Ionicons name={!showPassword ? "eye" : "eye-off"} size={24} color="#0092E4" />
            </View>
          </TouchableOpacity>
        )}
      </View>
      {error ? (
        <Text className="text-sm text-red-600 font-ubuntu_light px-2">{error}</Text>
      ) : null}
    </View>
  );
};

export default Input;
