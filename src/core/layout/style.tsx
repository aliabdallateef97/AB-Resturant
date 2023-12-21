import { styled,Stack } from "@mui/material";

export const Root = styled("div")(({ theme }) => ({
  display:'flex',
  flexDirection:'column',
  flexGrow: 1,
  zIndex: 1,
  overflow: "hidden",
  position: "relative",
  minHeight:'100vh'
}));


export const ChildrenRoot = styled(Stack)(({ theme }) => ({
minHeight:"calc(100vh - 100px)"
}));