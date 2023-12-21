import { Stack,styled } from "@mui/material";

export const OrderItemStyled =styled(Stack)(({theme})=>({
    borderRadius:'10px',
    border:' 2px solid #5D5D81',
    backgroundColor:theme.palette.secondary.main,
    padding:'8px 12px',
    margin:'12px auto',
    flexDirection:'column',
    gap:'6px',
    width:'100%'
}))

