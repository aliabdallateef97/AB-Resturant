import { OrderItemStyled } from "@/core/styles"
import { Skeleton, Stack } from "@mui/material"

const OrderSkeleton = () => {
  return (
    <Stack direction='column' gap='6px' width={'100%'}>
    <OrderItemStyled>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
    </OrderItemStyled>
    <OrderItemStyled>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
    </OrderItemStyled>
    <OrderItemStyled>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'}/>
    </OrderItemStyled>
    </Stack>
  )
}

export default OrderSkeleton