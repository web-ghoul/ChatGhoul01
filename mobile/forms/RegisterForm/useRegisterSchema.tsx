import * as Yup from 'yup';

const useRegisterSchema = () => {
    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is Required'),

        username: Yup.string()
            .required('Username is Required'),

        gender: Yup.string()
            .oneOf(['male', 'female'], 'Gender must be either "male" or "female"')
            .required('Gender is required'),

        phone: Yup.string()
            .required('Phone number is required'),

        password: Yup.string()
            .min(8, 'Too Short!')
            .required('Password is required'),
    });

    const registerInitialValues = {
        email: "",
        username: "",
        gender: "male",
        phone: "",
        password: ""
    };

    return { registerSchema, registerInitialValues };
};

export default useRegisterSchema;
