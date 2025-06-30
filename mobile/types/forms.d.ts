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

interface FormTemplateTypes {
    image: ImageSourcePropType;
    title: string;
    description: string;
    children: ReactNode
}

type FormTypes = "login" | "register" | "forgotPassword"

export type { LoginFormProps, LoginTypes, RegisterFormProps, ForgotPasswordFormProps, FormTemplateTypes, FormTypes }