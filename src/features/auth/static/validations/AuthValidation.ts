import * as Yup from 'yup'

export const AuthValidation=Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[\^$*.[\]{}()?"!@#%&/,><':;|_~`]/, 'Password must contain at least one special character')
    .required('Password is required'),
  });