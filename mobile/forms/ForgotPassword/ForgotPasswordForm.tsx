import Input from '@/components/Input'
import { ForgotPasswordFormProps } from '@/types/forms'
import { Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import FormTemplate from '../FormTemplate';

const ForgotPasswordForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: ForgotPasswordFormProps) => {
    return (
        <FormTemplate
            image={require('../../assets/images/forgotpassword.png')}
            title={"Forgot Password"}
            description={"Please Give Us Email or Username To Help You."}
        >
            <View className={`flex flex-col items-center`} style={{ gap: 15 }}>
                <Input
                    icon={<AntDesign name="user" size={18} color="#999" />}
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={() => handleBlur('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                    placeholder='Email or Username'
                />
            </View>
            <View className={`w-full flex flex-col items-center`} style={{ gap: 10 }}>
                <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full w-full flex items-center`}>
                    <Text className={`text-white font-ubuntu_regular text-xl`}>Forgot Password</Text>
                </TouchableOpacity>
                <Link href={"/(auth)/login"} className='text-lg text-primary font-ubuntu_medium'>Go Back</Link>
            </View>
        </FormTemplate>
    )
}

export default ForgotPasswordForm
