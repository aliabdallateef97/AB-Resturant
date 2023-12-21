import { Stack,styled } from "@mui/material";

export const MainNav=styled(Stack)({
    display:'flex',
    flexDirection:'row',
    'li':{
        listStyle:'none',
        display:'flex',
    }
})


export const IconContainer =styled(Stack)({
    flexDirection:'row',
    gap:'8px',
    alignItems:'center',
})