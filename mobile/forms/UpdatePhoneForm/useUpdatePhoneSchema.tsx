import { useProfileStore } from '@/store/useProfileStore';
import * as Yup from 'yup';

const useUpdatePhoneSchema = () => {
    const { profile } = useProfileStore((state) => state)

    const updatePhoneSchema = Yup.object().shape({
        phone: Yup.string().required('Phone Number is Required'),
    });

    const updatePhoneInitialValues = {
        phone: profile ? profile.phone : "",
    }

    return { updatePhoneSchema, updatePhoneInitialValues }
}

export default useUpdatePhoneSchema
