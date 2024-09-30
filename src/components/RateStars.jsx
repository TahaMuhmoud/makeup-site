import PropTypes from "prop-types";
import { BiStar } from "react-icons/bi";
import { COLOR_TWO } from "../utils/constants";

function RateStars({ rating }) {
  return (
    <div className="flex items-center gap-4 bg-white p-2 pr-4 rounded-full ">
      <div className="w-fit bg-white flex relative overflow-hidden">
        {Array.from({ length: 5 }, (_, i) => (
          <BiStar key={i} color={COLOR_TWO} className="text-xl sm:text-2xl" />
        ))}
        <span
          className={`bg-white h-full absolute top-0 right-0`}
          style={{
            width: `${100 - (rating ? rating : 4.5 / 5) * 100}%`,
          }}
        ></span>
      </div>
      <span className="text-two sm:text-lg">{rating ? rating : 4.5}</span>
    </div>
  );
}

RateStars.propTypes = {
  rating: PropTypes.number,
};

export default RateStars;
