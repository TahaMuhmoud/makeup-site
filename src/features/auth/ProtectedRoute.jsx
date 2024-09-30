import PropTypes from "prop-types";
import { useUser } from "../auth/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FullPageSpinner from "../../components/FullPageSpinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <FullPageSpinner />;

  if (!isLoading && isAuthenticated) return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

export default ProtectedRoute;
