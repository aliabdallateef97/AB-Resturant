import {Stack,styled} from '@mui/material'

export const CartItems=styled('ul')(({theme})=>({
    listStyle:'none',
    margin:0,
    padding:0,
    maxHeight:'20rem',
    overflow:'auto',
}))

export const Total=styled(Stack)(({theme})=>({
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    margin: '1rem 0'
}))

export const Actions=styled(Stack)(({theme})=>({
textAlign:'right',
flexDirection:'row',
}))

  
