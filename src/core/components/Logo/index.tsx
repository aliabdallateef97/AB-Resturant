import { FormattedMessage } from "react-intl";
import { CustomedTypography } from "..";
import { FastfoodIcon } from "@/core/config/import/icons";
import { LogoStyled } from "./style";
import { useNavigate } from "react-router-dom";


const index = () => {
  const navigate=useNavigate()

  const clickNavigater=()=>{
    navigate('/home')
  }
  return (
    <LogoStyled onClick={clickNavigater}>
      <FastfoodIcon/>
      <CustomedTypography colorprops="dark" variant="h3">
        {<FormattedMessage id="A&B" />}
      </CustomedTypography>
    </LogoStyled>
  );
};

export default index;
