import PropTypes from "prop-types";
import { useDarkMode } from "../context/useDarkMode";

function ProductImg({ src, className }) {
  const [darkMode] = useDarkMode();
  return (
    <img
      src={src}
      alt=""
      className={`${
        !darkMode ? "mix-blend-multiply" : ""
      } w-full max-w-96 h-full object-scale-down object-centers transition-all duration-1000 group-hover:scale-125 ${className}`}
    />
  );
}

ProductImg.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProductImg;
