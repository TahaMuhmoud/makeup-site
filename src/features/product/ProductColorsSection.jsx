import { useState } from "react";
import PropTypes from "prop-types";
import ShowMoreButton from "../../components/ShowMoreButton";

function ProductColorsSection({ colors }) {
  const [showColors, setShowColors] = useState(false);
  return (
    <div className="w-full flex flex-col gap-5">
      <ShowMoreButton
        innerText={"Colors"}
        isShow={showColors}
        setIsShow={setShowColors}
      />
      {showColors && (
        <div className="flex gap-3 lg:flex-wrap overflow-x-scroll lg:overflow-x-hidden p-3">
          {colors?.map((color, i) => (
            <div
              key={i}
              className="text-center text-white hover:animate-incScale text-lg min-w-36 max-w-36 aspect-square rounded-lg border-2 border-white outline outline-1 cursor-pointer grid place-items-center"
              style={{
                background: color["hex_value"],
                outlineColor: color["hex_value"],
              }}
            >
              {color["colour_name"]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ProductColorsSection.propTypes = {
  colors: PropTypes.array,
};

export default ProductColorsSection;
