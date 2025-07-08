import Input from '@/components/Input'
import { UpdateAboutFormProps } from '@/types/forms'
import { Text, TouchableOpacity } from 'react-native'
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Container from '@/components/Container';
import Feather from '@expo/vector-icons/Feather';

const UpdateAboutForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateAboutFormProps) => {
    return (
        <CustomKeyboardView>
            <Container className={`flex-1 py-4 flex-col justify-stretch items-center`} style={{ gap: 30 }}>
                <Input
                    icon={<Feather name="info" size={18} color="#999" />}
                    value={values.about}
                    onChange={handleChange('about')}
                    onBlur={() => handleBlur('about')}
                    error={touched.about && errors.about ? errors.about : ''}
                    placeholder='About Me'
                />
                <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full flex items-center w-full`}>
                    <Text className={`text-white font-ubuntu_regular text-xl`}>Save</Text>
                </TouchableOpacity>
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateAboutForm
