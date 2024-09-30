import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ScrollXSection from "../../components/ScrollXSection";

function ByBrands({ brands }) {
  const navigate = useNavigate();
  function handleBrandOnClick(brand) {
    navigate(`/brand/${brand}`);
  }
  return (
    <ScrollXSection
      header="Shop By Brand"
      items={brands}
      itemOnClick={handleBrandOnClick}
    />
  );
}

ByBrands.propTypes = {
  brands: PropTypes.array,
};

export default ByBrands;
