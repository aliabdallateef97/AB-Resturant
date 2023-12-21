import { Stack,styled } from "@mui/material"; 

export const LogoContainer=styled(Stack)({
    padding:'20px 10px',
    display:'flex',
    flexDirection:'column',
    gap:'10px'
})

export const ListItem=styled(Stack)({
    display:'flex',
    flexDirection:'column',
    width:'100%',
    'li':{
        listStyle:'none',
        display:'flex',
        width:'100%'
        
    }
})
