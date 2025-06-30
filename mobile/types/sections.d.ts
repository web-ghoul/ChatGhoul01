import { ImageSourcePropType } from "react-native"

interface SliderSectionTypes {
    index: number;
    image: ImageSourcePropType,
    title: string;
    description: string;
    scrollToPrev: () => void;
    scrollToNext: () => void
}

export type { SliderSectionTypes }