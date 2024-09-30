import { PAY_WAYS } from "../../utils/constants";
import { Tooltip } from "react-tooltip";

const PayWays = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      {PAY_WAYS.map((way, i) => (
        <div key={i} className="">
          <img
            src={way.imgSrc}
            alt=""
            data-tooltip-id="my-tooltip"
            data-tooltip-content={way.text}
            data-tooltip-place="top"
            className="hover:animate-incScale-high"
          />
          <Tooltip id="my-tooltip" />
        </div>
      ))}
    </div>
  );
};

export default PayWays;
