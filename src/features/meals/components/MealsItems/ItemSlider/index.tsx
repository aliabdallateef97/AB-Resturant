import { ReactNode,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MealCard from "../MealCard";
import { useGetMealsItems } from "@/features/meals/services";
import { SectionTitle } from "./style";
import { CustomedTypography,MetaData } from "@/core/components";
import SkeletonCard from "../SkeletonCard";
import { useTheme } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import  {Navigation, Pagination, FreeMode}  from "swiper/modules";



type PropsType = {
  type: string;
  title: ReactNode;
  number:number
};

const MealSlider = ({ type, title,number }: PropsType) => {
  const { data,isLoading } = useGetMealsItems( {type,number} );
  const theme=useTheme()
  const [direction ,setDirection]=useState(theme.direction)
  
  const updateDirection=()=>{
    setDirection(theme.direction)
  }


  return (
    <>
      <SectionTitle>
        <CustomedTypography colorprops="light" variant="h4">{title}</CustomedTypography>
      </SectionTitle>
      <MetaData loading={isLoading} LoadingSkeleton={<SkeletonCard />}>
      <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          width={270}
          spaceBetween={32}
          freeMode={true}
          // pagination={{
          //   clickable: false,
          // }}
          // navigation={false}
          draggable={true}
          dir={ direction}
          onUpdate={updateDirection}
        >
          {data?.map((item) => {
            return (
              <SwiperSlide  key={item.id}>
                <MealCard image={item.img} title={item.title} id={item.id} />
              </SwiperSlide >
            );
          })}
        </Swiper>
        </MetaData>
    </>
  );
};

export default MealSlider;
