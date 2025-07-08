import * as Yup from 'yup';

const useUpdateEmailSchema = () => {
    const updateEmailSchema = Yup.object().shape({
        email: Yup.string().email("Email is invalid").required('Email is Required'),
    });

    const updateEmailInitialValues = {
        email: "",
    }

    return { updateEmailSchema, updateEmailInitialValues }
}

export default useUpdateEmailSchema
