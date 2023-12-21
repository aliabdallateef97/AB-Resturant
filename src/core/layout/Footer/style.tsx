import {Stack,styled} from '@mui/material'

export const Footer=styled(Stack)(({theme})=>({
    backgroundColor: theme.palette.secondary.dark,
    width:'100%',
    padding:'6px',
    alignItems:'center',
    justifyContent:'center',
    gap:'2px',
    marginTop:'16px',
}))