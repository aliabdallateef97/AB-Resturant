import { ReactNode } from "react";
import { useTheme } from "@mui/material";
import { CustomedTypography } from "./style";
import { Variant } from "@mui/material/styles/createTypography";

type PropsType = {
  responsive?: string;
  colorprops: string;
  children: ReactNode;
  variant: Variant;
};

const CustomedTypo = ({
  colorprops,
  responsive,
  children,
  variant,
}: PropsType) => {
  const theme = useTheme();
  let colorTheme = "";
  switch (colorprops) {
    case "dark":
      colorTheme = theme.palette.primary.dark;
      break;
    case "light":
      colorTheme = theme.palette.primary.light;
      break;
    case "gray":
      colorTheme = theme.palette.secondary.light;
      break;
    case "blue":
      colorTheme = theme.palette.primary.main;
      break;
    case "red":
      colorTheme = theme.palette.error.main;
      break
    default:
      break;
  }

  return (
    <CustomedTypography
      colorprops={colorTheme}
      responsive={responsive}
      variant={variant}
    >
      {children}
    </CustomedTypography>
  );
};

export default CustomedTypo;
