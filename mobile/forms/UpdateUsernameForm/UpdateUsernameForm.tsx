import Input from '@/components/Input'
import { UpdateUsernameFormProps } from '@/types/forms'
import { Text, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Container from '@/components/Container';

const UpdateUsernameForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateUsernameFormProps) => {
    return (
        <CustomKeyboardView>
            <Container className={`flex-1 py-4 flex-col justify-between items-center`} style={{ gap: 30 }}>
                <Input
                    icon={<AntDesign name="user" size={18} color="#999" />}
                    value={values.username}
                    onChange={handleChange('username')}
                    onBlur={() => handleBlur('username')}
                    error={touched.username && errors.username ? errors.username : ''}
                    placeholder='Username'
                />
                <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full flex items-center w-full`}>
                    <Text className={`text-white font-ubuntu_regular text-xl`}>Save</Text>
                </TouchableOpacity>
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateUsernameForm
