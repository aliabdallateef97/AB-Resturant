import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";


export const StyledNavLink=styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: '400',
    width:'100%',
    padding: '0.7rem 2rem',
    '&.active':{
        backgroundColor: theme.palette.info.main,
        color: theme.palette.success.main,
    },
    '&:hover':{
        backgroundColor: theme.palette.info.main,
        color: theme.palette.success.main,
    }
}))