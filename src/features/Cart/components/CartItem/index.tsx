import { Actions, CartItemStyle, Summary } from './style';
import {Stack,IconButton} from '@mui/material'
import { CustomedTypography } from '@/core/components';

type PropsType={
    price:number,
    title:string,
    quantity:number,
    onRemove:()=>void,
    onAdd:()=>void
}

const CartItem = (props:PropsType) => {

  return (
    <CartItemStyle>
        <Stack>
        <CustomedTypography variant='h3' colorprops='gray'>{props.title}</CustomedTypography>
        <Summary>
        <CustomedTypography variant='h4' colorprops='gray'>${props.price}</CustomedTypography>
        <CustomedTypography variant='h4' colorprops='gray'>x{props.quantity}</CustomedTypography>
        </Summary>
        </Stack>
        <Actions>
            <IconButton onClick={props.onAdd}>+</IconButton>
            <IconButton onClick={props.onRemove}>-</IconButton>
        </Actions>
    </CartItemStyle>
  )
}

export default CartItem