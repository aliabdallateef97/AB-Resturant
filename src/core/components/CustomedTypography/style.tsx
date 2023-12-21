import { Typography, styled } from "@mui/material";

type CustomedTypographyProps = {
  colorprops: string;
  responsive?: string;
};

export const CustomedTypography = styled(Typography)<CustomedTypographyProps>(
  ({ theme, responsive, colorprops }) => ({
    color: colorprops,
    [theme.breakpoints.down("sm")]: {
      fontSize: responsive ? responsive : "16px",
    },
  })
);

