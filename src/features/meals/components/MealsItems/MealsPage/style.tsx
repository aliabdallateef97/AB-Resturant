import {  Tab,styled } from "@mui/material";

export const CustomTab=styled(Tab)(({theme})=>({
    fontSize:'20px',
    color:theme.palette.secondary.main,
    [theme.breakpoints.down('md')]:{
        fontSize:'18px'
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'14px'
    }
}))