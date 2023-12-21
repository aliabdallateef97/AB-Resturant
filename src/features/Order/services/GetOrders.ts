import axios from "axios"
import { useQuery } from "@tanstack/react-query"


const orders=()=>{
    return axios("https://ab-resturant-default-rtdb.firebaseio.com/orders.json")
}

export const getOrders=()=>{
    return useQuery({
        queryKey:['orders'],
        queryFn:()=>orders(),
    })
}