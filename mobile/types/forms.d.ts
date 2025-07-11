import { FormikProps } from "formik";
import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

interface LoginTypes { emailOrUsername: string; password: string }

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

interface UpdateUsernameTypes { username: string }

type UpdateUsernameFormProps = FormikProps<UpdateUsernameTypes>;

interface UpdateEmailTypes { email: string }

type UpdateEmailFormProps = FormikProps<UpdateEmailTypes>;

interface UpdateGenderTypes { gender: string }

type UpdateGenderFormProps = FormikProps<UpdateGenderTypes>;

interface UpdatePhoneTypes { phone: string }

type UpdatePhoneFormProps = FormikProps<UpdatePhoneTypes>;

interface UpdateAboutTypes { about: string }

type UpdateAboutFormProps = FormikProps<UpdateAboutTypes>;

interface FormTemplateTypes {
    image: ImageSourcePropType;
    title: string;
    description: string;
    children: ReactNode
}

type FormTypes = "login" | "register" | "forgotPassword" | "updateUsername" | "updateUsername" | "updateEmail" | "updatePhone" | "updateGender" | "updateAbout"

export type { LoginFormProps, LoginTypes, RegisterFormProps, ForgotPasswordFormProps, UpdateUsernameFormProps, FormTemplateTypes, FormTypes, UpdateEmailFormProps, UpdateGenderFormProps, UpdatePhoneFormProps, UpdateAboutFormProps, UpdateAboutTypes, UpdatePhoneTypes, UpdateGenderTypes, UpdateEmailTypes, UpdateUsernameTypes }