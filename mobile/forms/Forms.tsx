import React from 'react';
import { Formik } from 'formik';
import LoginForm from './LoginForm/LoginForm';
import useLoginSchema from './LoginForm/useLoginSchema';
import RegisterForm from './RegisterForm/RegisterForm';
import useRegisterSchema from './RegisterForm/useRegisterSchema';
import { FormTypes, LoginTypes } from '@/types/forms';
import useForgotPasswordSchema from './ForgotPasswordForm/useForgotPasswordSchema';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import useLoginSubmit from './LoginForm/useLoginSubmit';
import useUpdateUsernameSchema from './UpdateUsernameForm/useUpdateUsernameSchema';
import UpdateUsernameForm from './UpdateUsernameForm/UpdateUsernameForm';
import UpdateEmailForm from './UpdateEmailForm/UpdateEmailForm';
import UpdatePhoneForm from './UpdatePhoneForm/UpdatePhoneForm';
import UpdateGenderForm from './UpdateGenderForm/UpdateGenderForm';
import UpdateAboutForm from './UpdateAboutForm/UpdateAboutForm';
import useUpdateEmailSchema from './UpdateEmailForm/useUpdateEmailSchema';
import useUpdateGenderSchema from './UpdateGenderForm/useUpdateGenderSchema';
import useUpdatePhoneSchema from './UpdatePhoneForm/useUpdatePhoneSchema';
import useUpdateAboutSchema from './UpdateAboutForm/useUpdateAboutSchema';
import useUpdateUsernameSubmit from './UpdateUsernameForm/useUpdateUsernameSubmit';

const Forms = ({ type }: { type: FormTypes }) => {
    const { loginSchema, loginInitialValues } = useLoginSchema()
    const { handleLogin } = useLoginSubmit()
    const { registerSchema, registerInitialValues } = useRegisterSchema()
    const { forgotPasswordSchema, forgotPasswordInitialValues } = useForgotPasswordSchema()
    const { updateUsernameInitialValues, updateUsernameSchema } = useUpdateUsernameSchema()
    const { handleUpdateUsername } = useUpdateUsernameSubmit()
    const { updateEmailInitialValues, updateEmailSchema } = useUpdateEmailSchema()
    const { updateGenderInitialValues, updateGenderSchema } = useUpdateGenderSchema()
    const { updatePhoneInitialValues, updatePhoneSchema } = useUpdatePhoneSchema()
    const { updateAboutInitialValues, updateAboutSchema } = useUpdateAboutSchema()

    return type === "login" ? (
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={(values: LoginTypes) => {
                handleLogin(values)
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
    ) : type === "updateUsername" ? (
        <Formik
            initialValues={updateUsernameInitialValues}
            validationSchema={updateUsernameSchema}
            onSubmit={(values) => {
                handleUpdateUsername(values)
            }}
        >
            {(formik) => <UpdateUsernameForm {...formik} />}
        </Formik>
    ) : type === "updateEmail" ? (
        <Formik
            initialValues={updateEmailInitialValues}
            validationSchema={updateEmailSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <UpdateEmailForm {...formik} />}
        </Formik>
    ) : type === "updatePhone" ? (
        <Formik
            initialValues={updatePhoneInitialValues}
            validationSchema={updatePhoneSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <UpdatePhoneForm {...formik} />}
        </Formik>
    ) : type === "updateGender" ? (
        <Formik
            initialValues={updateGenderInitialValues}
            validationSchema={updateGenderSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <UpdateGenderForm {...formik} />}
        </Formik>
    ) : type === "updateAbout" && (
        <Formik
            initialValues={updateAboutInitialValues}
            validationSchema={updateAboutSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(formik) => <UpdateAboutForm {...formik} />}
        </Formik>
    )
}

export default Forms
