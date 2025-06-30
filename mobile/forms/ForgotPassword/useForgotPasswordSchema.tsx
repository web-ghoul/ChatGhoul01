import * as Yup from 'yup';

const useForgotPasswordSchema = () => {
    const forgotPasswordSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email or Username is Required'),
    });

    const forgotPasswordInitialValues = {
        email: "",
    }

    return { forgotPasswordSchema, forgotPasswordInitialValues }
}

export default useForgotPasswordSchema
