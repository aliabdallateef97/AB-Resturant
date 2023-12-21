import { sharedPalette } from "./shared";

export const lightPalette = {
  primary: {
    main: "#3B3355",
    dark: "#333333",
    light: "#ffffff",
    gray:"#4F4F4F"
  },
  secondary: {
    main: "#828282",
    light:"#FFFFFF",
    dark: "#BDBDBD",
  },
  background: {
    default: "#ffffff",
  },
  header:{
    main:'hsl(215, 35%, 81%)'
  },
  ...sharedPalette,
};
