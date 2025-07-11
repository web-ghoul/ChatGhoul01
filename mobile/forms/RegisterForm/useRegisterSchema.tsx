import * as Yup from 'yup';

const useRegisterSchema = () => {
    const registerSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Email is Required'),

        username: Yup.string().max(10)
            .required('Username is Required'),

        gender: Yup.string()
            .oneOf(['male', 'female'], 'Gender must be either "male" or "female"')
            .required('Gender is required'),

        phone: Yup.string()
            .matches(/^01\d{9}$/, 'Phone must be 11 digits and start with 01')
            .required('Phone number is required'),

        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
            )
            .required('Password is required'),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const registerInitialValues = {
        email: "",
        username: "",
        gender: "male",
        phone: "",
        password: "",
        confirmPassword: ""
    };

    return { registerSchema, registerInitialValues };
};

export default useRegisterSchema;
