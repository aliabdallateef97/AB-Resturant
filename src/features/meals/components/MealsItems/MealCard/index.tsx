import { useNavigate } from "react-router-dom";
import { Card, MealName } from "./style";
import { CustomedTypography } from "@/core/components";

type PropsType = {
  id: number;
  image: string;
  title: string;
};

const MealCard = ({ id, image, title }: PropsType) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(`/meal-details/${id}`);
  };

  return (
    <Card>
      <div className={image} onClick={onNavigateHandler}>
        <img src={image} />
      </div>
      <MealName>
        <CustomedTypography colorprops="blue" variant="h5">
          {title}
        </CustomedTypography>
      </MealName>
    </Card>
  );
};

export default MealCard;
