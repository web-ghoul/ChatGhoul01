import * as Yup from 'yup';

const useLoginSchema = () => {
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email or Username is Required'),
        password: Yup.string().min(8, 'Too Short!').required('Required'),
    });

    const loginInitialValues = {
        email: "",
        password: ""
    }

    return { loginSchema, loginInitialValues }
}

export default useLoginSchema
