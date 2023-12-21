import {styled} from '@mui/material'

export const StyledForm=styled('form')(({theme})=>({
    display:'flex',
    gap:'8px',
    width:'60%',
    flexDirection:'column',
    [theme.breakpoints.down('sm')]:{
        width:'100%'
    }
}))