import PropTypes from "prop-types";

function ColorCircle({ color, style }) {
  return (
    <span
      className={`w-6 aspect-square rounded-full absolute border-2 border-three hover:z-10 hover:scale-150`}
      style={{ background: color, ...style }}
    ></span>
  );
}

ColorCircle.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

export default ColorCircle;
