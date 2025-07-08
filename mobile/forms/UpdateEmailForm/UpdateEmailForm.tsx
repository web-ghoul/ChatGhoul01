import Input from '@/components/Input'
import { UpdateEmailFormProps } from '@/types/forms'
import { Text, TouchableOpacity } from 'react-native'
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Container from '@/components/Container';
import Ionicons from '@expo/vector-icons/Ionicons';

const UpdateEmailForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateEmailFormProps) => {
    return (
        <CustomKeyboardView>
            <Container className={`flex-1 py-4 flex-col justify-stretch items-center`} style={{ gap: 30 }}>
                <Input
                    icon={<Ionicons name="mail-outline" size={18} color="#999" />}
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={() => handleBlur('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                    placeholder='Email'
                />
                <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full flex items-center w-full`}>
                    <Text className={`text-white font-ubuntu_regular text-xl`}>Save</Text>
                </TouchableOpacity>
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateEmailForm
