import { Stack,styled } from "@mui/material"; 
import { NavLink } from "react-router-dom";

export const LogoContainer=styled(Stack)(({theme})=>({
    padding:'20px 10px',
    display:'flex',
    flexDirection:'column',
    gap:'10px'
}))

export const ListItem=styled(Stack)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'100%',
    'li':{
        listStyle:'none',
        display:'flex',
        width:'100%'
        
    }
    
}))
