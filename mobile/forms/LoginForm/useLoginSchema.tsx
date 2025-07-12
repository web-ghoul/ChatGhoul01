import * as Yup from 'yup';

const useLoginSchema = () => {
    const loginSchema = Yup.object().shape({
        emailOrUsernameOrPhone: Yup.string().required('Email, Username or Phone is Required'),
        password: Yup.string().min(8, 'Too Short!').required('Required'),
    });

    const loginInitialValues = {
        emailOrUsernameOrPhone: "",
        password: ""
    }

    return { loginSchema, loginInitialValues }
}

export default useLoginSchema
