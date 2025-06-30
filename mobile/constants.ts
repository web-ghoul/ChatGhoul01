import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get("window")

export const headerHeight = height * 0.075

export const os = Platform.OS