import { useProfileStore } from '@/store/useProfileStore';
import * as Yup from 'yup';

const useUpdateAboutSchema = () => {
    const { profile } = useProfileStore((state) => state)

    const updateAboutSchema = Yup.object().shape({
        about: Yup.string().required('About is Required'),
    });

    const updateAboutInitialValues = {
        about: profile ? profile.about : "",
    }

    return { updateAboutSchema, updateAboutInitialValues }
}

export default useUpdateAboutSchema
