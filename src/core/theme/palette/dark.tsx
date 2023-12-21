import { sharedPalette } from "./shared";

export const darkPalette = {
  primary: {
    main: "#5D5D81",
    dark: "#ffffff",
    light: "#333333",
    gray:"#F2F2F2"
  }, 
  secondary: {
    main: "#BDBDBD",
    light:"#4F4F4F",
    dark: "#828282",
  },
  background: {
    default: "#333333",
  },
  header:{
    main:'#795757'
  },
  ...sharedPalette,
};
