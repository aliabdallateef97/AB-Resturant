import {Box,styled} from '@mui/material'

export const MainContent=styled(Box)({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(16rem,1fr))',
        gap: '1rem',
        marginBottom: '1rem',
})