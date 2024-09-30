import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ScrollXSection from "../../components/ScrollXSection";

function ByProductTypes({ types }) {
  const navigate = useNavigate();
  function handleBrandOnClick(type) {
    navigate(`/product_type/${type}`);
  }
  return (
    <ScrollXSection
      header="Shop By Product Type"
      items={types}
      itemOnClick={handleBrandOnClick}
    />
  );
}

ByProductTypes.propTypes = {
  types: PropTypes.array,
};

export default ByProductTypes;
