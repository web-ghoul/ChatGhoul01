import Input from '@/components/Input'
import { LoginFormProps } from '@/types/forms'
import { Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import FormTemplate from '../FormTemplate';
import SubmitButton from '@/components/SubmitButton';

const LoginForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: LoginFormProps) => {
    return (
        <FormTemplate
            image={require('../../assets/images/login.png')}
            title={"Login"}
            description={"Please Sign in To Continue."}
        >
            <View className={`flex flex-col items-center w-full`} style={{ gap: 15 }}>
                <Input
                    icon={<AntDesign name="user" size={18} color="#999" />}
                    value={values.emailOrUsername}
                    onChange={handleChange('email')}
                    onBlur={() => handleBlur('email')}
                    error={touched.emailOrUsername && errors.emailOrUsername ? errors.emailOrUsername : ''}
                    placeholder='Email or Username'
                />
                <View className={`flex flex-col items-center w-full`} style={{ gap: 4 }}>
                    <Input
                        icon={<FontAwesome name="lock" size={18} color="#999" />}
                        value={values.password}
                        onChange={handleChange('password')}
                        onBlur={() => handleBlur('password')}
                        error={touched.password && errors.password ? errors.password : ''}
                        type={"password"}
                        placeholder={'Password'}
                    />
                    <Link
                        href="/(auth)/forgotpassword"
                    >
                        <View className={`flex items-end w-full`}>
                            <Text className={`text-primary font-ubuntu_regular text-md px-4`}>Forgot Password?</Text>
                        </View>
                    </Link>
                </View>
            </View>
            <View className={`w-full flex flex-col items-center`} style={{ gap: 10 }}>
                <SubmitButton value={"Sign In"} handleSubmit={handleSubmit} />
                <View className={`flex flex-row items-center text-center`} style={{ gap: 10 }}>
                    <Text className='text-lg text-gray-300 font-ubuntu_regular'>Don&apos;t have account ?</Text>
                    <Link href={"/(auth)/register"} className='text-lg text-primary font-ubuntu_medium'>Sign Up</Link>
                </View>
            </View>
        </FormTemplate>
    )
}

export default LoginForm
