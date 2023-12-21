import { Container } from '../../../../core/styles'
import { ImgInfo, MainStack, TextInfo } from './styles'
import { CustomedTypography } from '../../../../core/components'
import { FormattedMessage } from 'react-intl'
import LandingImg from '../../assets/images/landing.png'


const Landing = () => {
  return (
    <Container>
    <MainStack>
    <TextInfo>
        <CustomedTypography variant='h2' responsive='20px' colorprops='dark'>{<FormattedMessage id='welcome'/>}</CustomedTypography>
        <CustomedTypography variant='h3' responsive='16px' colorprops='gray'>{<FormattedMessage id='thank'/>}</CustomedTypography>
        <CustomedTypography variant='h3' responsive='16px' colorprops='gray'>{<FormattedMessage id='aspire'/>}</CustomedTypography>
    </TextInfo>
    <ImgInfo>
    <img src={LandingImg} className='img'/>
    </ImgInfo>
    </MainStack>
    </Container>
  )
}

export default Landing