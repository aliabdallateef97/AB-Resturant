import { useGetMealDetails } from "@/features/meals/services";
import { useParams } from "react-router-dom";
import { Container } from "@/core/styles";
import { CustomedTypography } from "@/core/components";
import { DetailsStack, MainStack, StyledForm } from "./style";
import { Button, TextField } from "@mui/material";
import { MetaData } from "@/core/components";
import MealDetailsSkeletion from "./MealDetailsSkeleton";
import { FormattedMessage } from "react-intl";
import React, { useState } from "react";
import * as actions from "@/core/config/import/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";

const index = () => {
  const [quantity, setQuantity] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectors.isLoggedIn);

  if (typeof id === "undefined") {
    return <div>Invalid ID</div>;
  }

  const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const { data, isLoading } = useGetMealDetails({ id });

  const addItemHandler = () => {
    const item = {
      title: data?.title,
      price: data?.price?.toFixed(2),
      id: id,
      quantity: +quantity,
    };
    dispatch(actions.addItem(item));
    setQuantity("");
  };

  return (
    <MetaData loading={isLoading} LoadingSkeleton={<MealDetailsSkeletion />}>
      <Container style={{ marginTop: "30px" }}>
        <CustomedTypography colorprops="dark" variant="h3" responsive="20px">
          {data?.title}
        </CustomedTypography>
        <MainStack>
          <img src={data?.img} />
          <DetailsStack>
            
            <CustomedTypography
              colorprops="dark"
              variant="h4"
              responsive="18px"
            >
              Summary
            </CustomedTypography>
            <p
              dangerouslySetInnerHTML={{ __html: data ? data?.summary : "" }}
            ></p>

            <CustomedTypography
              colorprops="dark"
              variant="h4"
              responsive="18px"
            >
              Price:${data?.price?.toFixed(2)}
            </CustomedTypography>

            {isLoggedIn && (
              <StyledForm>
                <TextField
                  id="filled-number"
                  label={<FormattedMessage id="quantity" />}
                  type="number"
                  value={quantity}
                  onChange={changeQuantity}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
                <Button
                  variant="outlined"
                  size="large"
                  onClick={addItemHandler}
                >
                  {<FormattedMessage id="addToCard" />}
                </Button>
              </StyledForm>
            )}

          </DetailsStack>
        </MainStack>
      </Container>
    </MetaData>
  );
};

export default index;
