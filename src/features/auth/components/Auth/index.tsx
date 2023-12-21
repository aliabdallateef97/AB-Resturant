import React from "react";
import { ImgContainer, MainStack, SecondStack, StyledForm } from "./style";
import { CustomedTypography } from "@/core/components";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@/core/config/import/icons";
import AuthImg from "@/core/assets/undraw_secure_login_pdn4.svg";
import { Container } from "@/core/styles";
import { useSignUp, useLogIn } from "../../services";
import { ArrowForwardIcon, ArrowBackIcon } from "@/core/config/import/icons";
import { useTheme } from "@mui/material";
import { FormattedMessage } from "react-intl";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { AuthValidation } from "@/features/auth/static/validations/AuthValidation";

interface MyFormValues {
  email: string;
  password: string;
}

const initialValues: MyFormValues = { email: "", password: "" };

const Auth = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLogin, setIsLogIn] = React.useState(false);
  const { mutate: signup, isLoading: signupLoading } = useSignUp();
  const { mutate: login, isLoading: loginLoading } = useLogIn();
  const theme = useTheme();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AuthValidation,
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
        returnSecureToken: true,
      };

      if (isLogin) {
        login(userData);
      } else {
        signup(userData);
      }
    },
  });

  const switchAuthModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <MainStack>
        <SecondStack>

          <CustomedTypography colorprops="dark" variant="h3">
            {isLogin ? (
              <FormattedMessage id="login" />
            ) : (
              <FormattedMessage id="signup" />
            )}
          </CustomedTypography>

          <StyledForm onSubmit={formik.handleSubmit}>
            
            <Stack gap="4px">
              <TextField
                id="filled-number"
                label={<FormattedMessage id="email" />}
                type="email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <CustomedTypography colorprops="red" variant="h5">
                  {formik.errors.email}
                </CustomedTypography>
              ) : null}
            </Stack>

            <Stack gap='4px'>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  {<FormattedMessage id="password" />}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  value={formik.values.password}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={!showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {formik.errors.password && formik.touched.password ? (
                <CustomedTypography colorprops="red" variant="h5">
                  {formik.errors.password}
                </CustomedTypography>
              ) : null}
            </Stack>

            <LoadingButton
              loading={isLogin ? loginLoading : signupLoading}
              variant="contained"
              size="large"
              type="submit"
            >
              {isLogin ? (
                <FormattedMessage id="login" />
              ) : (
                <FormattedMessage id="createAccount" />
              )}
            </LoadingButton>


            <Stack
              onClick={switchAuthModeHandler}
              direction="row"
              gap="4px"
              sx={{ cursor: "pointer" }}
            >
              <CustomedTypography colorprops="gray" variant="h5">
                {!isLogin ? (
                  <FormattedMessage id="existing" />
                ) : (
                  <FormattedMessage id="signupMove" />
                )}
              </CustomedTypography>
              {theme.direction == "ltr" ? (
                <ArrowForwardIcon />
              ) : (
                <ArrowBackIcon />
              )}
            </Stack>

          </StyledForm>
        </SecondStack>

        <ImgContainer>
          <img src={AuthImg} alt="AuthImg" />
        </ImgContainer>

      </MainStack>
    </Container>
  );
};

export default Auth;
