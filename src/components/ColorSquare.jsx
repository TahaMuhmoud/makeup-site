import { Fragment } from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import { COLOR_TWO } from "../utils/constants";

function ColorSquare({ color, handleSelectedColor, className }) {
  return (
    <Fragment>
      <div
        className={`w-10 aspect-square rounded-lg border-2 border-white outline outline-1 cursor-pointer ${className}`}
        style={{
          background: color["hex_value"],
          outlineColor: color["hex_value"],
        }}
        data-tooltip-id="my-tooltip"
        data-tooltip-content={color["colour_name"]}
        data-tooltip-place="top"
        onClick={handleSelectedColor}
      ></div>
      <Tooltip
        id="my-tooltip"
        style={{ background: COLOR_TWO, color: "white" }}
      />
    </Fragment>
  );
}

ColorSquare.propTypes = {
  color: PropTypes.object,
  handleSelectedColor: PropTypes.func,
  className: PropTypes.string,
};

export default ColorSquare;
