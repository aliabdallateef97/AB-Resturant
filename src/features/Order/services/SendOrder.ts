import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as actions from '@/core/config/import/actions'
import { Item } from "@/core/config/import/actions";

export type orderProps={
    cart:{
        items:Item[],
        totalQuantity:number,
        totalPrice:number,
      },
      name:string,
      site:string,
      number:number|string,
      userId:string|null,
}

const order=(orderData:orderProps)=>{
    return axios.post("https://ab-resturant-default-rtdb.firebaseio.com/orders.json",orderData)
}


export const useOrder=()=>{
    const dispatch=useDispatch()
    return useMutation(order,{
        onSuccess:()=>{
         dispatch(actions.clearCart())
        },
        onError:(data)=>alert(data?.response?.data?.error?.message)
    })
}