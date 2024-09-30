import PropTypes from "prop-types";
import Button from "../../components/Button";
import { BiPlus } from "react-icons/bi";
import { useCartProducts } from "../cart/useCartProducts";
import { useIncreaseQuantity } from "../cart/useIncreaseQuantity";
import { useAddToCart } from "../cart/useAddToCart";
import { CircleLoader } from "react-spinners";

function AddToCartButton({ innerText, product, selectedColor, className }) {
  let { cartProducts } = useCartProducts();
  let { increaseQuantity, isQuantityIncreasing } = useIncreaseQuantity();

  let { addToCart, isAdding } = useAddToCart();

  let isProductInCart = cartProducts?.filter(
    (p) => product.id === p.product_id
  );

  let quantityInCart =
    isProductInCart.length > 0 ? isProductInCart[0].quantity : 0;
  function handleAddToCart() {
    let isProductInCartWithSameColor = cartProducts?.filter(
      (item) =>
        JSON.stringify({
          id: item.product_id,
          inCart: true,
          selectedColor: item.selectedColor,
        }) ===
        JSON.stringify({
          id: product.id,
          inCart: true,
          selectedColor: selectedColor,
        })
    );
    if (isProductInCartWithSameColor[0]) {
      increaseQuantity({
        id: isProductInCartWithSameColor[0].id,
        quantity: isProductInCartWithSameColor[0].quantity,
      });
    } else {
      addToCart({
        id: product.id,
        product,
        inCart: true,
        selectedColor: selectedColor,
        quantity: 1,
      });
    }
  }
  return (
    <div className={`flex gap-2 ${className}`}>
      <Button
        innerText={innerText}
        rightIcon={
          !isAdding && !isQuantityIncreasing ? (
            <BiPlus size={25} />
          ) : (
            <CircleLoader size={25} />
          )
        }
        onClick={handleAddToCart}
      />
      {quantityInCart > 0 && (
        <span className="flex flex-col items-center">
          {quantityInCart ? quantityInCart : 0} <span>in cart</span>
        </span>
      )}
    </div>
  );
}

AddToCartButton.propTypes = {
  product: PropTypes.object,
  selectedColor: PropTypes.object,
  innerText: PropTypes.string,
  className: PropTypes.string,
};

export default AddToCartButton;
