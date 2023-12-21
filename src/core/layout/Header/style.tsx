import { Stack, styled } from "@mui/material";

export const Header = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    padding:'0 12px',
    '& .navbar':{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between'
    }
}));

export const Nav = styled(Stack)({
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
});