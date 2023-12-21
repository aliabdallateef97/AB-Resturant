import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import * as selectors from "../config/import/selectors";

function PublicRoutes() {
  const token = useSelector(selectors.token);
  return token ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
