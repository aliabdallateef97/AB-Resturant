import {request} from '../../../core/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { details,ApiResponse } from '../models/mealDetails'

type PropsType={
    id:string
}




const getMealDetails = (id:string): Promise<ApiResponse> => {
    return request({
      url: `recipes/${id}/information?apiKey=21cc279360ce44d78b690e9c21a48844`,
    });
  };


export const useGetMealDetails=({id}:PropsType)=>{
    return useQuery({
        queryKey:['item', id],
        queryFn:()=>getMealDetails(id),
        select:details
    })
}

