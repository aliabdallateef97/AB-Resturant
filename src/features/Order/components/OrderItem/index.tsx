import { CustomedTypography } from '@/core/components'
import { FormattedMessage } from 'react-intl'
import { Item } from "@/core/config/import/actions";
import { OrderItemStyled } from '@/core/styles';


type PropsType={
    items:Item[],
    name:string,
    price:number,
}

const OrderItem = ({items,name,price}:PropsType) => {
  return (
    <OrderItemStyled>
        <CustomedTypography variant='h4' colorprops='dark'>{<FormattedMessage id='name'/>} : {name}</CustomedTypography>
        <CustomedTypography variant='h4' colorprops='dark'>{<FormattedMessage id='order'/>} : {items.map(item=> <span key={item.id}>{item.title} ( {item.quantity} ) , </span>)}</CustomedTypography>
        <CustomedTypography variant='h4' colorprops='dark'>{<FormattedMessage id='totalPrice'/>} : {price.toFixed(2)}</CustomedTypography>
    </OrderItemStyled>
  )
}

export default OrderItem