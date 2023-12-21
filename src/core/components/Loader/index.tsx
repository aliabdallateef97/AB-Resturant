import Lottie from "lottie-react";
import Loader from '@/core/assets/json/loader.json'
import { LoaderContainer } from './style'

const index = () => {
  return (
    <LoaderContainer>
    <Lottie animationData={Loader} style={{width:'40%'}}/>
    </LoaderContainer>
  )
}

export default index
