import {Stack,styled} from '@mui/material'

export const CartItemStyle=styled('li')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #3B3355',
    padding: '1rem 0',
    margin: '1rem 0',
    flexDirection:'row'
})

export const Summary=styled(Stack)({
    width: '10rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row'
})

export const Actions=styled(Stack)(({theme})=>({
    flexDirection:'row',
    [theme.breakpoints.down('md')]:{
        flexDirection:'row',
    }
}))

  

  