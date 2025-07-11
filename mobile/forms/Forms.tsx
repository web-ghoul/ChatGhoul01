import { FormTypes, LoginTypes } from '@/types/forms';
import { Formik } from 'formik';
import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import useForgotPasswordSchema from './ForgotPasswordForm/useForgotPasswordSchema';
import LoginForm from './LoginForm/LoginForm';
import useLoginSchema from './LoginForm/useLoginSchema';
import useLoginSubmit from './LoginForm/useLoginSubmit';
import RegisterForm from './RegisterForm/RegisterForm';
import useRegisterSchema from './RegisterForm/useRegisterSchema';
import useRegisterSubmit from './RegisterForm/useRegisterSubmit';
import UpdateAboutForm from './UpdateAboutForm/UpdateAboutForm';
import useUpdateAboutSchema from './UpdateAboutForm/useUpdateAboutSchema';
import useUpdateAboutSubmit from './UpdateAboutForm/useUpdateAboutSubmit';
import UpdateEmailForm from './UpdateEmailForm/UpdateEmailForm';
import useUpdateEmailSchema from './UpdateEmailForm/useUpdateEmailSchema';
import useUpdateEmailSubmit from './UpdateEmailForm/useUpdateEmailSubmit';
import UpdateGenderForm from './UpdateGenderForm/UpdateGenderForm';
import useUpdateGenderSchema from './UpdateGenderForm/useUpdateGenderSchema';
import useUpdateGenderSubmit from './UpdateGenderForm/useUpdateGenderSubmit';
import UpdatePhoneForm from './UpdatePhoneForm/UpdatePhoneForm';
import useUpdatePhoneSchema from './UpdatePhoneForm/useUpdatePhoneSchema';
import useUpdatePhoneSubmit from './UpdatePhoneForm/useUpdatePhoneSubmit';
import UpdateUsernameForm from './UpdateUsernameForm/UpdateUsernameForm';
import useUpdateUsernameSchema from './UpdateUsernameForm/useUpdateUsernameSchema';
import useUpdateUsernameSubmit from './UpdateUsernameForm/useUpdateUsernameSubmit';

const Forms = ({ type }: { type: FormTypes }) => {
    const { loginSchema, loginInitialValues } = useLoginSchema()
    const { handleLogin } = useLoginSubmit()
    const { registerSchema, registerInitialValues } = useRegisterSchema()
    const { handleRegister } = useRegisterSubmit()
    const { forgotPasswordSchema, forgotPasswordInitialValues } = useForgotPasswordSchema()
    const { updateUsernameInitialValues, updateUsernameSchema } = useUpdateUsernameSchema()
    const { handleUpdateUsername } = useUpdateUsernameSubmit()
    const { updateEmailInitialValues, updateEmailSchema } = useUpdateEmailSchema()
    const { handleUpdateEmail } = useUpdateEmailSubmit()
    const { updateGenderInitialValues, updateGenderSchema } = useUpdateGenderSchema()
    const { handleUpdateGender } = useUpdateGenderSubmit()
    const { updatePhoneInitialValues, updatePhoneSchema } = useUpdatePhoneSchema()
    const { handleUpdatePhone } = useUpdatePhoneSubmit()
    const { updateAboutInitialValues, updateAboutSchema } = useUpdateAboutSchema()
    const { handleUpdateAbout } = useUpdateAboutSubmit()

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
                handleRegister(values);
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
                handleUpdateEmail(values)
            }}
        >
            {(formik) => <UpdateEmailForm {...formik} />}
        </Formik>
    ) : type === "updatePhone" ? (
        <Formik
            initialValues={updatePhoneInitialValues}
            validationSchema={updatePhoneSchema}
            onSubmit={(values) => {
                handleUpdatePhone(values)
            }}
        >
            {(formik) => <UpdatePhoneForm {...formik} />}
        </Formik>
    ) : type === "updateGender" ? (
        <Formik
            initialValues={updateGenderInitialValues}
            validationSchema={updateGenderSchema}
            onSubmit={(values) => {
                handleUpdateGender(values)
            }}
        >
            {(formik) => <UpdateGenderForm {...formik} />}
        </Formik>
    ) : type === "updateAbout" && (
        <Formik
            initialValues={updateAboutInitialValues}
            validationSchema={updateAboutSchema}
            onSubmit={(values) => {
                handleUpdateAbout(values)
            }}
        >
            {(formik) => <UpdateAboutForm {...formik} />}
        </Formik>
    )
}

export default Forms
