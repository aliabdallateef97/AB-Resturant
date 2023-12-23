import { Stack,styled } from "@mui/material";

export const MainStack=styled(Stack)(({theme})=>({
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'20px 0',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column-reverse',
        gap:'20px'
    }
}))

export const SecondStack=styled(Stack)(({theme})=>({
    flexDirection:'column',
    gap:'20px',
    alignItems:'center',
    width:'50%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}))

export const StyledForm=styled('form')({
display:'flex',
width:'90%',
flexDirection:'column',
gap:'30px',
})

export const ImgContainer=styled(Stack)(({theme})=>({
    width:'40%',
    'img':{
        width:'100%'
    },
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}))