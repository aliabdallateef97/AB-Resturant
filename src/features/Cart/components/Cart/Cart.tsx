import  { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import * as selectors from '@/core/config/import/selectors'
import * as actions from '@/core/config/import/actions'
import { Item } from '@/core/config/import/actions'
import { Actions, CartItems, Total } from './style'
import { Modal } from '@/core/components' 
import CartItem from '../CartItem'
import CheckOut from '../CheckOut'
import {Button} from '@mui/material'
import { FormattedMessage } from 'react-intl'


const Cart = () => {
    const dispatch=useDispatch()
    const items=useSelector(selectors.items)
    const totalPrice=useSelector(selectors.totalPrice)
    const [isCheckout,setIsCheckOut]=useState(false)
    const hasItems =items.length >0

    const unShowCart=()=>{
        dispatch(actions.showCart())
      }
    
      const showCheckOut=()=>{
        setIsCheckOut(true)
      }
    
      const addItem=(item:Item)=>{
        const mealItem={
          ...item,
          quantity:+1
        }
        dispatch(actions.addItem(mealItem))
      }
    
      const removeItem=(id:number)=>{
        dispatch(actions.removeItem(id))
      }

      const cartItems = (
        <CartItems>
          {items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              onRemove={()=>removeItem(item.id)}
              onAdd={()=>addItem(item)}
            />
          ))}
        </CartItems>
      )

      let cart=(
          <>
          {cartItems}
          <Total>
            <span>{<FormattedMessage id='totalPrice'/>}</span>
            <span>${totalPrice.toFixed(2)}</span>
            </Total>
          {isCheckout && <CheckOut />}
          {!isCheckout && <Actions>
            <Button onClick={unShowCart} variant='text'>
            {<FormattedMessage id='close'/>}
            </Button>
            <Button variant='contained' onClick={showCheckOut} disabled={!hasItems}>{<FormattedMessage id='order'/>}</Button>
            </Actions>}
          </>
        )
      

  return (
    <Modal onClose={unShowCart}>
        {cart}
    </Modal>
  )
}

export default Cart