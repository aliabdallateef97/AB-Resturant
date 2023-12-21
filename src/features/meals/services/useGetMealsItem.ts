import {request} from '../../../core/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { meals,ApiResponse } from '../models/mealsItems'

type PropsType={
    type:string,
    number:number
}




const getMealsItem = (type: string,number:number): Promise<ApiResponse> => {
    return request({
      url: `recipes/complexSearch?apiKey=21cc279360ce44d78b690e9c21a48844&type=${type}&number=${number}`,
    });
  };


export const useGetMealsItems=({type,number}:PropsType)=>{
    return useQuery({
        queryKey:['item', type],
        queryFn:()=>getMealsItem(type,number),
        select:meals
    })
}

