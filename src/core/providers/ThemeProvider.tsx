import React,{ReactNode} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "../theme";
import { createTheme } from "@mui/material/styles";
import * as selectors from "../config/import/selectors";


type ThemeProps={
    children:ReactNode
}

function ThemeContextProvider({ children }:ThemeProps) {
  const dir = useSelector(selectors.appDirection);
  const mode = useSelector(selectors.appMode);

  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", dir);
  }, [dir]);

  



  return (
        <ThemeProvider
          theme={createTheme(themeSettings({mode, dir}))}
        >
          {children}
        </ThemeProvider>
  );
}

export default ThemeContextProvider;
