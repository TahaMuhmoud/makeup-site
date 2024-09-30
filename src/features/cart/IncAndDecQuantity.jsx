import PropTypes from "prop-types";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CircleLoader } from "react-spinners";
import { COLOR_TWO } from "../../utils/constants";
import { useDecreaseQuantity } from "./useDecreaseQuantity";
import { useIncreaseQuantity } from "./useIncreaseQuantity";

function IncAndDecQuantity({ product, clickedState, indx }) {
  const [clicked, setClicked] = clickedState;

  let { decreaseQuantity, isQuantityDecreasing } = useDecreaseQuantity();

  let { increaseQuantity, isQuantityIncreasing } = useIncreaseQuantity();

  function handleIncrease(product) {
    increaseQuantity({
      id: product.id,
      quantity: product.quantity,
    });
  }

  function handleDecrease(product) {
    decreaseQuantity({
      id: product.id,
      quantity: product.quantity,
    });
  }

  return (
    <div className="w-full flex justify-between sm:justify-start gap-5 bg-">
      <span className=" text-lg">Quantity: </span>
      <div className="flex items-center gap-4 bg-white py-1 px-2 rounded-full">
        <span
          className="text-xl h-full aspect-square grid place-items-center cursor-pointer P-1 bg-three hover:bg-two hover:text-white rounded-full"
          onClick={() => {
            handleIncrease(product);
            setClicked(indx);
          }}
        >
          {isQuantityIncreasing && clicked == indx ? (
            <CircleLoader size={25} color={COLOR_TWO} />
          ) : (
            <BiPlus size={25} />
          )}
        </span>
        <span className="text-lg font-black">{product.quantity}</span>
        <span
          className="h-full aspect-square grid place-items-center cursor-pointer bg-three hover:bg-two hover:text-white rounded-full"
          onClick={() => {
            handleDecrease(product);
            setClicked(indx);
          }}
        >
          {isQuantityDecreasing && clickedState.clicked == indx ? (
            <CircleLoader size={25} color={COLOR_TWO} />
          ) : (
            <BiMinus size={25} />
          )}
        </span>
      </div>
    </div>
  );
}

IncAndDecQuantity.propTypes = {
  product: PropTypes.object,
  clickedState: PropTypes.array,
  indx: PropTypes.number,
};

export default IncAndDecQuantity;
