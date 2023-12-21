import { Stack,styled } from "@mui/material";


export const MainContainer=styled(Stack)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    margin:'20px',
    width:'100%',
    gap:'10px',

}))


export const DetailsContainer=styled(Stack)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    gap:'20px',
    [theme.breakpoints.down('md')]:{
        flexDirection:'column'
    }
}))

export const SummaryContainer=styled(Stack)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    width:'100%',
}))