import Input from '@/components/Input'
import { UpdateGenderFormProps } from '@/types/forms'
import { Text, TouchableOpacity } from 'react-native'
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Container from '@/components/Container';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const UpdateGenderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateGenderFormProps) => {
    return (
        <CustomKeyboardView>
            <Container className={`flex-1 py-4 flex-col justify-stretch items-center`} style={{ gap: 30 }}>
                <Input
                    icon={<FontAwesome name="transgender" size={18} color="#999" />}
                    value={values.gender}
                    onChange={handleChange('gender')}
                    onBlur={() => handleBlur('gender')}
                    error={touched.gender && errors.gender ? errors.gender : ''}
                    placeholder='Gender'
                    type={"gender"}
                />
                <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full flex items-center w-full`}>
                    <Text className={`text-white font-ubuntu_regular text-xl`}>Save</Text>
                </TouchableOpacity>
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateGenderForm
