import Container from '@/components/Container';
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import { useProfileStore } from '@/store/useProfileStore';
import { UpdateEmailFormProps } from '@/types/forms';
import Ionicons from '@expo/vector-icons/Ionicons';

const UpdateEmailForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateEmailFormProps) => {
    const { profile } = useProfileStore((state) => state)
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
                    type={'email'}
                />
                <SubmitButton disabled={values.email === profile?.email} value={"Save"} handleSubmit={handleSubmit} />
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateEmailForm
