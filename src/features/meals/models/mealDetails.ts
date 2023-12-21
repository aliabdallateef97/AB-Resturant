
  export interface ApiResponse {
    id: number;
    pricePerServing: number;
    image: string;
    title:string;
    summary:string;
  }
  
  
  
  export const details = (data: ApiResponse) => {
    return {
        title: data.title,
        id: data.id,
        img: data.image,
        price:data.pricePerServing,
        summary:data.summary
    }
  };
  