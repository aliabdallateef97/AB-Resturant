import { useSelector,useDispatch } from 'react-redux'
import * as selectors from '@/core/config/import/selectors'
import * as actions from '@/core/config/import/actions'
import { StyledForm } from './style'
import { useFormik } from 'formik'
import {OrderValidation} from '@/features/Cart/static/validations/orderValidation'
import { Button, Stack, TextField } from '@mui/material'
import { CustomedTypography } from '@/core/components'
import { useOrder } from '@/features/Order/services'
import { LoadingButton } from '@mui/lab'
import { FormattedMessage } from 'react-intl'



interface MyFormValues {
  name: string;
  site: string;
  number:number|string
}

const initialValues: MyFormValues = { name: "", site: "",number:"" };

const CheckOut = () => {
    const items =useSelector(selectors.items)
    const totalQuantity =useSelector(selectors.totalQuantity)
    const totalPrice =useSelector(selectors.totalPrice)
    const userId=useSelector(selectors.userId)
    const dispatch=useDispatch()

    const {mutate,isLoading} =useOrder()

    const closeCart=()=>{
      dispatch(actions.showCart())
    }

    const formik = useFormik({
      initialValues: initialValues,
      validationSchema: OrderValidation,
      onSubmit: (values) => {
        mutate({ cart:{
          items:items,
          totalQuantity:totalQuantity,
          totalPrice:totalPrice,
        },
        name:values.name,
        site:values.site,
        number:values.number,
        userId:userId})
      },
    });


  return (
    <>
    <StyledForm onSubmit={formik.handleSubmit}>

    <Stack gap="4px">
              <TextField
                id="filled-number"
                label={<FormattedMessage id='name'/>}
                type="text"
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <CustomedTypography colorprops="red" variant="h5">
                  {formik.errors.name}
                </CustomedTypography>
              ) : null}
            </Stack>

    <Stack gap="4px">
              <TextField
                id="filled-number"
                label={<FormattedMessage id='site'/>}
                type="text"
                variant="outlined"
                name="site"
                value={formik.values.site}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.site && formik.touched.site ? (
                <CustomedTypography colorprops="red" variant="h5">
                  {formik.errors.site}
                </CustomedTypography>
              ) : null}
            </Stack>

    <Stack gap="4px">
              <TextField
                id="filled-number"
                label={<FormattedMessage id='number'/>}
                type="text"
                variant="outlined"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.number && formik.touched.number ? (
                <CustomedTypography colorprops="red" variant="h5">
                  {formik.errors.number}
                </CustomedTypography>
              ) : null}
            </Stack>

            <Stack direction='row' gap='6px'>
            <Button  variant='text' onClick={closeCart}>
            {<FormattedMessage id='close'/>}
            </Button>
            <LoadingButton loading={isLoading} variant='contained' type='submit'>{<FormattedMessage id='confirm'/>}</LoadingButton>
            </Stack>

    </StyledForm>
    </>
  )
}

export default CheckOut