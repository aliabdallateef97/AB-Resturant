import { sharedPalette } from "./shared";

export const lightPalette = {
  primary: {
    main: "#3B3355",
    dark: "#333333",
    light: "#ffffff",
  },
  secondary: {
    main: "#828282",
    light:"#4F4F4F",
    dark: 'hsl(215, 35%, 81%)',
  },
  background: {
    default: "#ffffff",
  },
  header:{
    main:'hsl(215, 35%, 81%)'
  },
  ...sharedPalette,
};
