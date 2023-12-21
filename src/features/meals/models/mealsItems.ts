// Shaped data according to the `meals` model
export interface Meal {
  id: number;
  img: string;
  title: string;
}

// Types of the original API response
export interface ApiResponse {
  number: number;
  offset: number;
  results: Array<{
    id: number;
    image: string;
    title: string;
    // Add other fields if necessary
  }>;
  totalResults: number;
}



export const meals = (data: ApiResponse): Meal[] => {
  return data?.results?.map(meal => ({
    title: meal.title,
    id: meal.id,
    img: meal.image,
  })) ?? [];
};
