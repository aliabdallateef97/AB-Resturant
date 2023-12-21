import { breakpoints } from "./breakpoints";
import { darkPalette } from "./palette/dark";
import { lightPalette } from "./palette/light";
import {fonts} from './fonts'
import { PaletteMode,Direction } from "@mui/material";

type PropsType={
  mode:PaletteMode,
  dir:Direction
}


export const themeSettings = ({mode,dir}:PropsType) => {
  return {
    direction: dir,
    palette: {
      mode: mode,
      ...(mode === "dark" ? { ...darkPalette } : { ...lightPalette }),
    },
    typography:
      dir === "rtl"
        ? { ...fonts, fontFamily: "Almarai,sans-serif" }
        : { ...fonts, fontFamily: "Nunito,sans-serif" },
    breakpoints: { ...breakpoints },
  };
};
