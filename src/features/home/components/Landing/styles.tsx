import { Stack, styled } from "@mui/material";

export const MainStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection:'row',
  alignItems: "center",
  justifyContent: "space-between",
  marginTop:'20px',
  [theme.breakpoints.down('md')]:{
    flexDirection:'column-reverse',
  }
}));

export const TextInfo = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "50%",
  [theme.breakpoints.down('md')]:{
    width: "80%",
    textAlign:'center'
  }
}));

export const ImgInfo = styled(Stack)({
    width: "40%",
    '&.img':{
        width:'100%'
    }
});
