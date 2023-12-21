import { Stack,styled } from "@mui/material";
import { NavLink } from 'react-router-dom'

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