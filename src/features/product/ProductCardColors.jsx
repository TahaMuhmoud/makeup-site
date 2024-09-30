import PropTypes from "prop-types";
import ColorCircle from "../../components/ColorCircle";

function ProductCardColors({ colors }) {
  return (
    <div className="w-full flex gap-1">
      <span className="text-two">{colors.length}</span>
      <span>colors</span>
      <div className="flex justify-center flex-wrap min-h-5 relative">
        {colors.map((color, i) => (
          <ColorCircle
            key={i}
            color={color["hex_value"]}
            style={{ left: i * 10 }}
          />
        ))}
      </div>
    </div>
  );
}

ProductCardColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
};

export default ProductCardColors;
