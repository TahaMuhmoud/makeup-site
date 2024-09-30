import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { useCartProducts } from "../features/cart/useCartProducts";
import { useDeleteProductFromCart } from "../features/cart/useDeleteProductFromCart";
import { useClearCart } from "../features/cart/useClearCart";
import ProductImg from "../components/ProductImg";
import ColorSquare from "../components/ColorSquare";
import { CircleLoader } from "react-spinners";
import { COLOR_TWO } from "../utils/constants";
import { useState } from "react";
import IncAndDecQuantity from "../features/cart/IncAndDecQuantity";
import { BiTrashAlt } from "react-icons/bi";

function CartPage() {
  const [clicked, setClicked] = useState(null);
  let { cartProducts, isLoading } = useCartProducts();

  let { deleteProduct, isDeleting } = useDeleteProductFromCart();

  let { clearCart, isClearing } = useClearCart();

  if (isLoading) return <Spinner />;
  cartProducts = cartProducts?.sort((a, b) => b.id - a.id);
  // Total prices
  let totalPrices = cartProducts
    ?.map((p) => Number(p.product?.price) * Number(p.quantity))
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);

  function handleDelete(product) {
    deleteProduct(product.id);
  }
  function handleClear() {
    if (cartProducts?.length > 0) {
      clearCart();
    }
  }
  return (
    <div>
      <div className="flex justify-end px-5 sm:px-10 py-5">
        <Button
          rightIcon={
            isClearing ? <CircleLoader size={25} /> : <BiTrashAlt size={25} />
          }
          disabled={cartProducts.length === 0}
          onClick={handleClear}
        >
          CLEAR YOUR CART
        </Button>
      </div>
      <div className="w-full px-2 py-5 sm:p-5">
        {cartProducts.length > 0 ? (
          <div className="flex flex-col gap-5 px-0 lg:px-20">
            {cartProducts?.map(
              (product, i) =>
                product.product && (
                  <div
                    key={i}
                    className="bg-three p-2 flex flex-col items-center sm:flex-row gap-4 relative"
                  >
                    <div className="img min-w-52 max-w-52 aspect-square overflow-hidden grid place-items-center group">
                      {(
                        <ProductImg
                          src={product.product?.image_link}
                          className="max-h-48 "
                        />
                      ) && (
                        <ProductImg
                          src={product?.product?.api_featured_image}
                          className="max-h-48 "
                        />
                      )}
                    </div>
                    <div className="info w-full flex flex-col gap-5 p-5">
                      <h1 className="flex flex-wrap justify-center items-end gap-3 sm:gap-5">
                        <span className="text-lg">Product Name:</span>{" "}
                        <span className="text-2xl sm:text-3xl font-black text-center">
                          {product.product.name}
                        </span>
                      </h1>
                      {product.selectedColor && (
                        <div className="text- flex gap-10">
                          <div className="flex items-center gap-5">
                            <span className="text-lg">choosed color :</span>
                            <ColorSquare color={product.selectedColor} />
                          </div>
                        </div>
                      )}
                      <IncAndDecQuantity
                        product={product}
                        clickedState={[clicked, setClicked]}
                        indx={i}
                      />
                      <div className="flex items-end justify-end gap-5">
                        <span className="text-xl font-black">Total Price:</span>{" "}
                        <span className="text-3xl font-black italic">
                          {Number(product.product.price) *
                            Number(product.quantity)}
                          {product.product.price_sign}
                        </span>
                      </div>
                    </div>
                    <div className="absolute right-5 top-5">
                      {isDeleting && clicked == i ? (
                        <CircleLoader size={30} color={COLOR_TWO} />
                      ) : (
                        <BiTrashAlt
                          size={35}
                          cursor={"pointer"}
                          className="hover:text-two text-white bg-main-dark p-1 rounded-full"
                          onClick={() => {
                            handleDelete(product);
                            setClicked(i);
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          <div className="w-full min-h-96 grid place-items-center text-5xl font-black italic text-three">
            YOUR CART IS EMPTY
          </div>
        )}
        <div className="flex justify-center items-center gap-5 text-2xl sm:text-4xl font-black p-5">
          SUBTOTAL:
          <span className="text-two text-3xl font-black italic outline-dashed outline-two px-5 py-1 rounded-2xl">
            {totalPrices.toFixed(2)}$
          </span>
        </div>
      </div>
    </div>
  );
}

CartPage.propTypes = {};

export default CartPage;
