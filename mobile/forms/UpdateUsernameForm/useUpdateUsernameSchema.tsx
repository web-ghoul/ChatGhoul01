import { useProfileStore } from '@/store/useProfileStore';
import * as Yup from 'yup';

const useUpdateUsernameSchema = () => {
    const { profile } = useProfileStore((state) => state)

    const updateUsernameSchema = Yup.object().shape({
        username: Yup.string().required('Username is Required'),
    });

    const updateUsernameInitialValues = {
        username: profile ? profile.username : "",
    }

    return { updateUsernameSchema, updateUsernameInitialValues }
}

export default useUpdateUsernameSchema
