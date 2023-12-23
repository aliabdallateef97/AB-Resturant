import {Stack ,styled} from '@mui/material'

export const Card=styled(Stack)({
    display: 'flex',
    flexDirection: 'column',
    alignItems:"center",
    border: '2px solid #BFCDE0',
    width: '280px',
    maxWidth: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '0 auto 10px',
    gap:'4px',
    cursor: 'pointer',
    '&.image':{
        maxWidth: '100%',
        'img':{
            maxWidth: '100%',
        }
    }
})

export const MealName=styled(Stack)({
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center'
})