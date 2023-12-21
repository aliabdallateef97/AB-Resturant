import { Stack,styled } from "@mui/material";

export const MainStack=styled(Stack)(({theme})=>({
    flexDirection:'row',
    justifyContent:'space-between',
    margin:'20px 0',
    'img':{
        width:'40%',
    },
    [theme.breakpoints.down('md')]:{
        flexDirection:'column',
        gap:'10px',
        'img':{
            width:'100%'
        }
    }
}))

export const DetailsStack=styled(Stack)(({theme})=>({
    flexDirection:'column',
    gap:'8px',
    width:'50%',
    'p':{
        color:theme.palette.primary.main,
        fontSize:'16px'
    },
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}))

export const StyledForm=styled('form')(({theme})=>({
    display:'flex',
    flexDirection:'row',
    gap:'10px',
    alignItems:'center',
    
}))