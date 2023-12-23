import { SectionTitle } from "@/core/components";
import MealSlider from "./ItemSlider";
import { Container } from "@/core/styles";
import { FormattedMessage } from "react-intl";

const MealItem = () => {
  return (
    <Container>
      <SectionTitle>{<FormattedMessage id="meals" />}</SectionTitle>
      <MealSlider
        type="main course"
        title={<FormattedMessage id="main-course" />}
        number={9}
      />
      {/* <MealSlider
        type="side dish"
        title={<FormattedMessage id="side-dish" />}
        number={9}
      />
      <MealSlider
        type="appetizer"
        title={<FormattedMessage id="appetizer" />}
        number={9}
      />
      <MealSlider
        type="salad"
        title={<FormattedMessage id="salad" />}
        number={9}
      />
      <MealSlider
        type="soup"
        title={<FormattedMessage id="soup" />}
        number={9}
      />
      <MealSlider
        type="sauce"
        title={<FormattedMessage id="sauce" />}
        number={9}
      />
      <MealSlider
        type="drink"
        title={<FormattedMessage id="drink" />}
        number={9}
      />
      <MealSlider
        type="dessert"
        title={<FormattedMessage id="dessert" />}
        number={9}
      /> */}
    </Container>
  );
};

export default MealItem;
