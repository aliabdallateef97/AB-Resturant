import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import * as selectors from "../config/import/selectors";

function ProtectedRoutes() {
  const token = useSelector(selectors.token);
  return token ? <Outlet /> : <Navigate to="/auth" />;
}

export default ProtectedRoutes;
