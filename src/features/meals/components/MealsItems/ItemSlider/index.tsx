import { ReactNode } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MealCard from "../MealCard";
import { useGetMealsItems } from "@/features/meals/services";
import { SectionTitle } from "./style";
import { CustomedTypography,MetaData } from "@/core/components";
import SkeletonCard from "../SkeletonCard";
import { useTheme } from "@mui/material";


type PropsType = {
  type: string;
  title: ReactNode;
  number:number
};

const MealSlider = ({ type, title,number }: PropsType) => {
  const { data,isLoading } = useGetMealsItems( {type,number} );
  const theme=useTheme()


  return (
    <>
      <SectionTitle>
        <CustomedTypography colorprops="light" variant="h4">{title}</CustomedTypography>
      </SectionTitle>
      <MetaData loading={isLoading} LoadingSkeleton={<SkeletonCard />}>
        <Splide
          options={{
            fixedWidth: "270px",
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
            direction: theme.direction === "ltr" ? "ltr" : "rtl",
          }}
        >
          {data?.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <MealCard image={item.img} title={item.title} id={item.id} />
              </SplideSlide>
            );
          })}
        </Splide>
        </MetaData>
    </>
  );
};

export default MealSlider;
