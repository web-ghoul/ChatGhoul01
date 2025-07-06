import React from 'react';
import { Formik } from 'formik';
import LoginForm from './LoginForm/LoginForm';
import useLoginSchema from './LoginForm/useLoginSchema';
import RegisterForm from './RegisterForm/RegisterForm';
import useRegisterSchema from './RegisterForm/useRegisterSchema';
import { FormTypes, LoginTypes } from '@/types/forms';
import useForgotPasswordSchema from './ForgotPasswordForm/useForgotPasswordSchema';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import { router } from 'expo-router';
import useLoginSubmit from './LoginForm/useLoginSubmit';
import useUpdateUsernameSchema from './UpdateUsernameForm/useUpdateUsernameSchema';
import UpdateUsernameForm from './UpdateUsernameForm/UpdateUsernameForm';

const Forms = ({ type }: { type: FormTypes }) => {
    const { loginSchema, loginInitialValues } = useLoginSchema()
    const { handleLogin } = useLoginSubmit()
    const { registerSchema, registerInitialValues } = useRegisterSchema()
    const { forgotPasswordSchema, forgotPasswordInitialValues } = useForgotPasswordSchema()
    const { updateUsernameInitialValues, updateUsernameSchema } = useUpdateUsernameSchema()

    return type === "login" ? (
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={(values: LoginTypes) => {
                handleLogin(values)
                router.push("/(tabs)")
            }}
        >
            {(formik) => <LoginForm {...formik} />}
        </Formik>
    ) : type === "register" ? (
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <RegisterForm {...formik} />}
        </Formik>
    ) : type === "forgotPassword" ? (
        <Formik
            initialValues={forgotPasswordInitialValues}
            validationSchema={forgotPasswordSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <ForgotPasswordForm {...formik} />}
        </Formik>
    ): type === "updateUsername" && (
        <Formik
            initialValues={updateUsernameInitialValues}
            validationSchema={updateUsernameSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <UpdateUsernameForm {...formik} />}
        </Formik>
    )
}

export default Forms
