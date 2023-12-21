import { Breakpoint } from "@mui/material/styles";

export const breakpoints: { keys: Breakpoint[]; values: Record<Breakpoint, number> } = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1250,
    xl: 1920,
  },
};