import * as Yup from 'yup';

const useUpdateAboutSchema = () => {
    const updateAboutSchema = Yup.object().shape({
        about: Yup.string().required('About is Required'),
    });

    const updateAboutInitialValues = {
        about: "",
    }

    return { updateAboutSchema, updateAboutInitialValues }
}

export default useUpdateAboutSchema
