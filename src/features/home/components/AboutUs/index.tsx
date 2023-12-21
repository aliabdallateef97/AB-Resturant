import { SectionTitle ,CustomedTypography } from "../../../../core/components";
import { Container } from "../../../../core/styles";
import { FormattedMessage } from "react-intl";
import { ImgInfo, MainStack, TextInfo } from "./style";
import AboutUsImg from '../../assets/images/salad.png'

const AboutUs = () => {
  return (
    <>
      <SectionTitle>{<FormattedMessage id="aboutus"/>}</SectionTitle>
      <Container>
        <MainStack>
            <TextInfo>
            <CustomedTypography colorprops="dark" variant="h3" responsive="16px">{<FormattedMessage id="offer"/>}</CustomedTypography>
            </TextInfo>
            <ImgInfo>
            <img src={AboutUsImg} className="img"/>
            </ImgInfo>
        </MainStack>
      </Container>
    </>
  );
};

export default AboutUs;
