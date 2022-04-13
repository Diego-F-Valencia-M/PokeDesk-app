import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const name = useSelector((state) => state.name);
  
  return name ? <Outlet /> : <Navigate to="/"/>
};

export default ProtectedRoutes;