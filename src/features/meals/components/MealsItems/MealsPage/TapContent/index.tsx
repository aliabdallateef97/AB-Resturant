import { useGetMealsItems } from '@/features/meals/services';
import { MainContent } from './style';
import MealCard from '../../MealCard';
import { MetaData } from '@/core/components';
import SkeletonCard from '../../SkeletonCard';


type PropsType = {
    type: string;
    number:number
  };

const TapContent = ({ type, number }: PropsType) => {
        const { data,isLoading } = useGetMealsItems( {type,number} );
  return (
    <MetaData loading={isLoading} LoadingSkeleton={<SkeletonCard />}>
    <MainContent>
        {data?.map(item=> <MealCard id={item.id} image={item.img} title={item.title} key={item.id}/>)}
    </MainContent>
    </MetaData>
  )
}

export default TapContent