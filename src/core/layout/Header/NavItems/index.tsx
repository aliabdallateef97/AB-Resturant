import { IconContainer, MainNav } from "./style";
import { FormattedMessage } from "react-intl";
import { MoodIcon,LanguageIcon,ShoppingCartIcon,ListIcon } from "@/core/config/import/icons";
import * as actions from '@/core/config/import/actions'
import { useMediaQuery,useTheme ,IconButton,Badge} from '@mui/material';
import { useState } from "react";
import NavDrawer from "../Drawer";
import { StyledNavLink } from "@/core/styles/StyledNavLink";
import * as selectors from '@/core/config/import/selectors'
import { useSelector,useDispatch } from "react-redux";

const NavItems = () => {
  const dispatch=useDispatch()
  const theme =useTheme()
  const matchesDown = useMediaQuery(theme.breakpoints.down('md'));
  const matchesUp = useMediaQuery(theme.breakpoints.up('md'));
  const loggedIn=useSelector(selectors.isLoggedIn)
  const totalQuantity=useSelector(selectors.totalQuantity)

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const changeMood=()=>{
    dispatch(actions.setMode())
  }

  const changeLanguage=()=>{
    dispatch(actions.changeLanguage())
  }

  const logoutHandler=()=>{
    dispatch(actions.clearCart())
    dispatch(actions.logout())
  }

  const showCart=()=>{
    dispatch(actions.showCart())
  }



  return (
    <>
    <MainNav>
      {matchesUp && <>
      <li>
        <StyledNavLink
          to="/home"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {<FormattedMessage id="home"/>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to={`/meal-items`}
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {<FormattedMessage id="meal-items"/>}
        </StyledNavLink>
      </li>
      {loggedIn && <li>
        <StyledNavLink
          to="/orders"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {<FormattedMessage id="orders"/>}
        </StyledNavLink>
      </li>}
     {loggedIn && <li>
        <StyledNavLink
          to="/auth"
          className={(navData) => (navData.isActive ? "active" : "")}
          onClick={logoutHandler}
        >
          {<FormattedMessage id="logout"/>}
        </StyledNavLink>
      </li>}
      {!loggedIn && <li>
        <StyledNavLink
          to="/auth"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {<FormattedMessage id="login"/>}
        </StyledNavLink>
      </li> }
      </> }
      
      <IconContainer>
      <IconButton onClick={changeMood}><MoodIcon /></IconButton>
      <IconButton onClick={changeLanguage}><LanguageIcon /></IconButton>
      {loggedIn && <IconButton onClick={showCart}><Badge badgeContent={totalQuantity} color="primary"><ShoppingCartIcon /></Badge></IconButton>}
      {matchesDown && <IconButton onClick={toggleDrawer(true)}><ListIcon /></IconButton>}
      </IconContainer>
    <NavDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    </MainNav>
    </>
  );
};

export default NavItems;
