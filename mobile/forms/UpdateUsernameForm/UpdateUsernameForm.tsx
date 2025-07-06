import Input from '@/components/Input'
import { UpdateUsernameFormProps } from '@/types/forms'
import { Text, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomKeyboardView from '@/components/CustomKeyboardView';

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
            <Input
                icon={<AntDesign name="user" size={18} color="#999" />}
                value={values.username}
                onChange={handleChange('email')}
                onBlur={() => handleBlur('email')}
                error={touched.username && errors.username ? errors.username : ''}
                placeholder='Username'
            />

            <TouchableOpacity onPress={() => handleSubmit()} className={`bg-primary px-4 py-4 rounded-full w-full flex items-center`}>
                <Text className={`text-white font-ubuntu_regular text-xl`}>Save</Text>
            </TouchableOpacity>
        </CustomKeyboardView>
    )
}

export default UpdateUsernameForm
