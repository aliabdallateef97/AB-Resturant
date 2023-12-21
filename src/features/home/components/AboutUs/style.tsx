import {Stack ,styled} from '@mui/material'

export const MainStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]:{
      flexDirection:'column',
    }
  }));

  export const TextInfo = styled(Stack)(({ theme }) => ({
    width: "50%",
    [theme.breakpoints.down('md')]:{
      width: "80%",
      textAlign:'center'
    }
  }));
  
  export const ImgInfo = styled(Stack)(({ theme }) => ({
      width: "30%",
      '&.img':{
          width:'100%'
      }
  }));
  