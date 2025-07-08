import Input from '@/components/Input'
import { UpdatePhoneFormProps } from '@/types/forms'
import { Text, TouchableOpacity } from 'react-native'
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Container from '@/components/Container';
import Ionicons from '@expo/vector-icons/Ionicons';

const UpdatePhoneForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdatePhoneFormProps) => {
    return (
        <CustomKeyboardView>
            <Container className={`flex-1 py-4 flex-col justify-stretch items-center`} style={{ gap: 30 }}>
                <Input
                    icon={<Ionicons name="call-outline" size={18} color="#999" />}
                    value={values.phone}
                    onChange={handleChange('phone')}
                    onBlur={() => handleBlur('phone')}
                    error={touched.phone && errors.phone ? errors.phone : ''}
                    placeholder='Phone Number'
                />
                <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full flex items-center w-full`}>
                    <Text className={`text-white font-ubuntu_regular text-xl`}>Save</Text>
                </TouchableOpacity>
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdatePhoneForm
