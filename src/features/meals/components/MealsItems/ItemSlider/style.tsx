import {Stack ,styled} from '@mui/material'

export const SectionTitle=styled(Stack)(({theme})=>({
    padding: '1rem 2rem',
    border: `2px solid ${theme.palette.info.main}`,
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '1rem',
    display:'flex',
    justifyContent:'center',
    textAlign:'center'
}))