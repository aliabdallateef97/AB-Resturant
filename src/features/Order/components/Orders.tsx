import {useEffect,useState} from 'react'
import { getOrders } from '../services'
import * as selectors from '@/core/config/import/selectors'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import { Container } from '@/core/styles'
import { orderProps } from '../services'
import OrderSkeleton from './OrderSkeleton'
import { MetaData } from '@/core/components'

type ExtendedOrderProps = orderProps & {
    id: string;
  };


const Orders = () => {
    const [ordersArray,setOrdersArray]=useState<ExtendedOrderProps[]>([])
    const {data,isLoading}=getOrders()
    const userId=useSelector(selectors.userId)



    useEffect(()=>{
        const orders:ExtendedOrderProps[]=[]
        const orderData=data?.data
        for(let key in orderData){
            if(orderData[key].userId ===userId){
                orders.push({
                    ...orderData[key],
                    id:key
                })
            }
        }
        setOrdersArray(orders)
    },[data?.data])

    let ordersArr=ordersArray.map(order=>{
        return <OrderItem key={order.id} name={order.name} price={order.cart.totalPrice} items={order.cart.items}/>
    })
  return (
    <Container>
        <MetaData loading={isLoading} LoadingSkeleton={<OrderSkeleton />}>
        {ordersArr}
        </MetaData></Container>
  )
}

export default Orders