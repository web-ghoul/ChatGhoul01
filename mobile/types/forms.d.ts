import { FormikProps } from "formik";
import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

interface LoginTypes { email: string; password: string }

type LoginFormProps = FormikProps<LoginTypes>;

interface RegisterTypes {
    email: string;
    username: string;
    gender: string;
    phone: string;
    password: string
}

type RegisterFormProps = FormikProps<RegisterTypes>;

type ForgotPasswordFormProps = FormikProps<{ email: string }>;

type UpdateUsernameFormProps = FormikProps<{ username: string }>;

type UpdateEmailFormProps = FormikProps<{ email: string }>;

type UpdateGenderFormProps = FormikProps<{ gender: string }>;

type UpdatePhoneFormProps = FormikProps<{ phone: string }>;

type UpdateAboutFormProps = FormikProps<{ about: string }>;

interface FormTemplateTypes {
    image: ImageSourcePropType;
    title: string;
    description: string;
    children: ReactNode
}

type FormTypes = "login" | "register" | "forgotPassword" | "updateUsername" | "updateUsername" | "updateEmail" | "updatePhone" | "updateGender" | "updateAbout"

export type { LoginFormProps, LoginTypes, RegisterFormProps, ForgotPasswordFormProps, UpdateUsernameFormProps, FormTemplateTypes, FormTypes, UpdateEmailFormProps, UpdateGenderFormProps, UpdatePhoneFormProps, UpdateAboutFormProps }