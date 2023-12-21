import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode,Direction } from "@mui/material";

interface CookiesSlice{
    mode:PaletteMode,
    lang:string,
    dir:Direction
}

const initialState:CookiesSlice = {
  mode: "light",
  lang: "en",
  dir: "ltr",
};

const cookiesSlice = createSlice({
  name: "cookies",
  initialState: initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") state.mode = "dark";
      else state.mode = "light";
    },
    changeLanguage: (state) => {
      if (state.lang === "ar") {
        state.lang = "en"
        state.dir = "ltr";
      }
      else {
        state.lang = "ar"
        state.dir = "rtl";
      }
    }
  },
});

export const { setMode, changeLanguage } = cookiesSlice.actions;
export default cookiesSlice.reducer;
