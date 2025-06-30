interface InputTypes {
    icon?: ReactNode;
    onChange: (value: string) => void;
    onBlur?: () => void;
    value: string;
    placeholder?: string;
    error?: string;
    type?: "password" | "tel-device",
}

interface LogoTypes {
    orientation?: "vertical" |
    "horizontal", textClassName?: string; style?: { [key: string]: string | number }; noTitle?: boolean
}

export type { InputTypes, LogoTypes }