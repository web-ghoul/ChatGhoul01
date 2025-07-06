import * as Yup from 'yup';

const useUpdateUsernameSchema = () => {
    const updateUsernameSchema = Yup.object().shape({
        username: Yup.string().required('Username is Required'),
    });

    const updateUsernameInitialValues = {
        username: "",
    }

    return { updateUsernameSchema, updateUsernameInitialValues }
}

export default useUpdateUsernameSchema
