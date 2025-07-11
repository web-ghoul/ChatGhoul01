import { useProfileStore } from '@/store/useProfileStore';
import * as Yup from 'yup';

const useUpdateGenderSchema = () => {
    const { profile } = useProfileStore((state) => state)

    const updateGenderSchema = Yup.object().shape({
        gender: Yup.string()
            .oneOf(['male', 'female'], 'Gender must be either "male" or "female"')
            .required('Gender is required'),
    });

    const updateGenderInitialValues = {
        gender: profile ? profile.gender : "",
    }

    return { updateGenderSchema, updateGenderInitialValues }
}

export default useUpdateGenderSchema
