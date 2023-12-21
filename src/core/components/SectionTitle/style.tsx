import {Stack ,styled} from '@mui/material'

export const Title = styled(Stack)(({theme})=>({
    textAlign: 'center',
    margin: '2rem auto',
    'h2':{
        margin: 'auto',
        padding: '1rem 1.3rem',
        fontSize: '2rem',
        position: 'relative',
        color:theme.palette.primary.dark,
        '&:after':{
            content: '""',
            backgroundColor: theme.palette.primary.main,
            bottom: '0',
            left: '50%',
            width: '7rem',
            height: '3px',
            position: 'absolute',
            transform: 'translateX(-50%)',
        }
    }
}))