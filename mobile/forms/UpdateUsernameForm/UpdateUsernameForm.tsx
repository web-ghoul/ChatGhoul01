import Container from '@/components/Container';
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import { useProfileStore } from '@/store/useProfileStore';
import { UpdateUsernameFormProps } from '@/types/forms';
import AntDesign from '@expo/vector-icons/AntDesign';

const UpdateUsernameForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateUsernameFormProps) => {
    const { profile } = useProfileStore((state) => state)
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
                    type={"username"}
                />
                <SubmitButton value={"Save"} disabled={values.username === profile?.username} handleSubmit={handleSubmit} />
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateUsernameForm
