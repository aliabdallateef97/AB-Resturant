import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import {login} from '@/core/config/import/actions'
import { useNavigate } from "react-router-dom";
import { AxiosError } from 'axios';

type userDataProps={
    email:string,
    password:string,
    returnSecureToken:boolean
}

interface ErrorResponse {
    error: {
        message: string;
    };
}

const logIn=(userData:userDataProps)=>{
    return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsP2KqofU01dDahEgi09cfKL7weKhOn-Y",userData)
}



export const useLogIn=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return useMutation(logIn,{
        onSuccess:(data)=>{
            const payload={
                idToken:data?.data?.idToken,
                localId:data?.data?.localId
            }
            dispatch(login(payload))
            navigate('/home')
        },
        onError: (error: unknown) => {
            const axiosError = error as AxiosError<ErrorResponse>;
            if (axiosError.response && axiosError.response.data) {
                alert(axiosError.response.data.error.message);
            } else {
                // Handle non-Axios error or missing data
                alert('An unknown error occurred');
            }
        }
    })
}