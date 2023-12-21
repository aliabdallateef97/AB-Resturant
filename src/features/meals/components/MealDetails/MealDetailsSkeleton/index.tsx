import React from 'react'
import { DetailsContainer, MainContainer, SummaryContainer } from './style'
import { Skeleton } from '@mui/material'

const MealDetailsSkeletion = () => {
  return (
    <MainContainer>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'60%'}/>
        <DetailsContainer>
        <Skeleton variant="rectangular" width={'40%'} height={300} />
        <SummaryContainer>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }}  width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
        </SummaryContainer>
        </DetailsContainer>
    </MainContainer>
  )
}

export default MealDetailsSkeletion