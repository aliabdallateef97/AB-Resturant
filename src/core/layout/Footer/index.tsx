
import { Footer } from './style'
import { CustomedTypography } from '@/core/components'

const index = () => {
  return (
    <Footer>
    <CustomedTypography variant='h5' responsive="12px" colorprops='dark'>Copyright &copy; 2023 All Right Reserved</CustomedTypography>
    <CustomedTypography variant='h5' responsive="12px" colorprops='dark'>This Website made by Ali Abd Allateef</CustomedTypography>
  </Footer>
  )
}

export default index