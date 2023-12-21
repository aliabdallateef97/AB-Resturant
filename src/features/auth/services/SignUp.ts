import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import {login} from '@/core/config/import/actions'
import { useNavigate } from "react-router-dom";

type userDataProps={
    email:string,
    password:string,
    returnSecureToken:boolean
}

const signUp=(userData:userDataProps)=>{
    return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsP2KqofU01dDahEgi09cfKL7weKhOn-Y",userData)
}


export const useSignUp=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return useMutation(signUp,{
        onSuccess:(data)=>{
            const payload={
                idToken:data?.data?.idToken,
                localId:data?.data?.localId
            }
            dispatch(login(payload))
            navigate('/home')
        },
        onError:(data)=>alert(data?.response?.data?.error?.message)
            
    })
}