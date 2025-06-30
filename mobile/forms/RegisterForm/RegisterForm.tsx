import { RegisterFormProps } from '@/types/forms'
import { Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Input from '@/components/Input'
import { Link } from 'expo-router'
import FormTemplate from '../FormTemplate'
import Fontisto from "@expo/vector-icons/Fontisto";
import Radio from '@/components/Radio';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Container from '@/components/Container';

const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
}: RegisterFormProps & { setFieldValue: (field: string, value: any) => void }) => {
    return (
        <FormTemplate
            image={require('../../assets/images/register.png')}
            title="Register"
            description="Please Register To Login."
        >
            <View className="flex flex-col items-center" style={{ gap: 15 }}>
                <Input
                    icon={<Ionicons name="mail-outline" size={18} color="#999" />}
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={() => handleBlur('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                    placeholder="Email"
                />
                <Input
                    icon={<AntDesign name="user" size={18} color="#999" />}
                    value={values.username}
                    onChange={handleChange('username')}
                    onBlur={() => handleBlur('username')}
                    error={touched.username && errors.username ? errors.username : ''}
                    placeholder="Username"
                />
                <Input
                    icon={<Ionicons name="call-outline" size={18} color="#999" />}
                    value={values.phone}
                    onChange={handleChange('phone')}
                    onBlur={() => handleBlur('phone')}
                    error={touched.phone && errors.phone ? errors.phone : ''}
                    placeholder="Phone Number"
                    type="tel-device"
                />

                <Container className={`flex flex-col items-center`}>
                    <View className={`flex-row flex w-full justify-between items-center`}>
                        <View
                            className={`flex-row justify-start items-center`}
                            style={{ gap: wp(2) }}
                        >
                            <Fontisto name="transgender" size={24} color="#fff" />
                            <Text className={`text-white font-[800]`} style={{ fontSize: wp(4) }}>
                                Gender :
                            </Text>
                        </View>
                        <Radio
                            title={"male"}
                            press={() => setFieldValue("gender", "male")}
                            active={values.gender === "male"}
                        />
                        <Radio
                            title={"female"}
                            press={() => setFieldValue("gender", "female")}
                            active={values.gender === "female"}
                        />
                    </View>
                    {touched.gender && errors.gender && (
                        <View className={`flex items-start w-full`}>
                            <Text className={`text-red-600 `}>{errors.gender}</Text>
                        </View>
                    )}
                </Container>

                <Input
                    icon={<FontAwesome name="lock" size={18} color="#999" />}
                    value={values.password}
                    onChange={handleChange('password')}
                    onBlur={() => handleBlur('password')}
                    error={touched.password && errors.password ? errors.password : ''}
                    type="password"
                    placeholder="Password"
                />
            </View>

            <View className="w-full flex flex-col items-center" style={{ gap: 10 }}>
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    className="bg-primary px-4 py-4 rounded-full w-full flex items-center"
                >
                    <Text className="text-white font-ubuntu_regular text-xl">Sign Up</Text>
                </TouchableOpacity>
                <View className="flex flex-row items-center text-center" style={{ gap: 10 }}>
                    <Text className="text-lg text-gray-300 font-ubuntu_regular">Already have account?</Text>
                    <Link href="/(auth)/login" className="text-lg text-primary font-ubuntu_medium">Sign In</Link>
                </View>
            </View>
        </FormTemplate>
    )
}

export default RegisterForm
