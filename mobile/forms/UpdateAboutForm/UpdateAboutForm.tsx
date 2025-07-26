import Container from '@/components/Container';
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Input from '@/components/Input';
import SubmitButton from '@/components/SubmitButton';
import { useProfileStore } from '@/store/useProfileStore';
import { UpdateAboutFormProps } from '@/types/forms';
import Feather from '@expo/vector-icons/Feather';

const UpdateAboutForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
}: UpdateAboutFormProps) => {
    const { profile } = useProfileStore((state) => state)
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
                <SubmitButton disabled={values.about === profile?.about} value={"Save"} handleSubmit={handleSubmit} />
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateAboutForm
