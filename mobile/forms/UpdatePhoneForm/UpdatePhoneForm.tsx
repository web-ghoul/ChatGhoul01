import Container from '@/components/Container';
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import { useProfileStore } from '@/store/useProfileStore';
import { UpdatePhoneFormProps } from '@/types/forms';
import Ionicons from '@expo/vector-icons/Ionicons';

const UpdatePhoneForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdatePhoneFormProps) => {
    const { profile } = useProfileStore((state) => state)
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
                <SubmitButton disabled={values.phone === profile?.phone} value={"Save"} handleSubmit={handleSubmit} />
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdatePhoneForm
