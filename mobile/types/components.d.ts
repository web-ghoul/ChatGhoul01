import { ReactNode } from "react";

interface InputTypes {
    icon?: ReactNode;
    iconClick?: () => void
    onChange: (value: string) => void;
    onBlur?: () => void;
    value: string;
    placeholder?: string;
    error?: string;
    type?: "password" | "tel-device" | "gender" | "email" | "username",
    inputRef?: RefObject<TextInput>;
}

interface ProfileInfoCardTypes {
    icon: ReactNode;
    title: string;
    value: string
    handle: () => void
}

interface LogoTypes {
    orientation?: "vertical" |
    "horizontal", textClassName?: string; style?: { [key: string]: string | number }; noTitle?: boolean; subTitle?: string
}

export type { InputTypes, LogoTypes, ProfileInfoCardTypes };

