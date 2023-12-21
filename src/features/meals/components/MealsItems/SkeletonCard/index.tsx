import React from 'react'
import { Container, Card } from './style'
import {Skeleton} from '@mui/material'

const SkeletonCard = () => {
  return (
    <Container>
        <Card>
        <Skeleton variant="rounded" width={'100%'} height={160} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        </Card>
        <Card>
        <Skeleton variant="rounded" width={'100%'} height={160} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        </Card>
        <Card>
        <Skeleton variant="rounded" width={'100%'} height={160} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        </Card>
        <Card>
        <Skeleton variant="rounded" width={'100%'} height={160} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        </Card>
    </Container>
  )
}

export default SkeletonCard