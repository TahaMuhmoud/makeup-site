import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Logo({ size, color }) {
  const navigate = useNavigate();
  return (
    <div
      className={`font-logo cursor-pointer ${size} ${color}`}
      onClick={() => navigate("/")}
    >
      Pretty
    </div>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Logo;
