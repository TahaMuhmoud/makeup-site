import { useState } from "react";
import PropTypes from "prop-types";
import ShowMoreButton from "../../components/ShowMoreButton";

function ProductDescription({ description }) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="w-full flex flex-col gap-5">
      <ShowMoreButton
        innerText={"Description"}
        isShow={showDescription}
        setIsShow={setShowDescription}
      />
      {showDescription && (
        <div className="text-lg md:text-xl italic font-medium sm:font-bold">
          {description}
        </div>
      )}
    </div>
  );
}

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProductDescription;
