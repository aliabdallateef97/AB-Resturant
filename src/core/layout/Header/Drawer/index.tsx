import Drawer from "@mui/material/Drawer";
import React from "react";
import { useTheme } from "@mui/material";
import { ListItem, LogoContainer } from "./style";
import { Logo } from "@/core/components";
import { FormattedMessage } from "react-intl";
import { StyledNavLink } from "@/core/styles/StyledNavLink";
import { useSelector,useDispatch} from "react-redux";
import { isLoggedIn } from "@/core/config/import/selectors";
import {logout} from '@/core/config/import/actions'

type propsType = {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export default function NavDrawer({ isOpen, toggleDrawer }: propsType) {
  const theme = useTheme();
  const loggedIn = useSelector(isLoggedIn);
  const dispatch=useDispatch()

  const logoutHandler=()=>{
    dispatch(logout())
  }

  return (
    <div>
      <Drawer
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <ListItem>
          <li>
            <StyledNavLink
              to="/home"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              {<FormattedMessage id="home" />}
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={`/meal-items`}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              {<FormattedMessage id="meal-items" />}
            </StyledNavLink>
          </li>
          {loggedIn && (
            <li>
              <StyledNavLink
                to="/orders"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                {<FormattedMessage id="orders" />}
              </StyledNavLink>
            </li>
          )}
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
        </ListItem>
      </Drawer>
    </div>
  );
}
