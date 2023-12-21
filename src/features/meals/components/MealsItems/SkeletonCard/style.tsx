import {Stack,styled} from '@mui/material'

export const Container=styled(Stack)(({theme})=>({
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
marginBottom:'10px',
gap:'6px',
[theme.breakpoints.down('sm')]:{
    flexDirection:'column',
    gap:'6px',
    alignItems:'center'
}
}))
export const Card=styled(Stack)(({theme})=>({
    width:'270px',
    border:`2px solid ${theme.palette.primary.main}`,
    padding:'6px',
    display:'flex',
    flexDirection:'column',
    gap:'4px',
    borderRadius:'10px'
}))