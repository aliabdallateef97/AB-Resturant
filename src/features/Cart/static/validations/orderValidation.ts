import * as Yup from 'yup'

export const OrderValidation=Yup.object().shape({
    name: Yup.string().required('Name is Required'),
    site: Yup.string().required('Site is Required'),
    number: Yup.number().required('Number is required'),
  });