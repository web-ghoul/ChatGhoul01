import { useProfileStore } from '@/store/useProfileStore';
import * as Yup from 'yup';

const useUpdateEmailSchema = () => {
    const { profile } = useProfileStore((state) => state)

    const updateEmailSchema = Yup.object().shape({
        email: Yup.string().email("Email is invalid").required('Email is Required'),
    });

    const updateEmailInitialValues = {
        email: profile ? profile.email : "",
    }

    return { updateEmailSchema, updateEmailInitialValues }
}

export default useUpdateEmailSchema
