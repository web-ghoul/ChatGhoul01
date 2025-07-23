import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get("window")

export const avatarSize = { width: width * 0.15, height: width * 0.15 }

export const avatarSizeSM = { width: width * 0.125, height: width * 0.125 }

export const headerHeight = height * 0.075

export const os = Platform.OS