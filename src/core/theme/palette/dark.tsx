import { sharedPalette } from "./shared";

export const darkPalette = {
  primary: {
    main: "#5D5D81",
    dark: "#ffffff",
    light: "#333333",
  }, 
  secondary: {
    main: "#BDBDBD",
    light:"#F2F2F2",
    dark: '#795757',
  },
  background: {
    default: "#333333",
  },
  header:{
    main:'#795757'
  },
  ...sharedPalette,
};
