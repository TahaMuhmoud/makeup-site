import PropTypes from "prop-types";
import { useFavoritesProducts } from "../favotites/useFavoritesProducts";
import ProductImg from "../../components/ProductImg";
import RateStars from "../../components/RateStars";
import ProductCardColors from "../product/ProductCardColors";
import { useNavigate } from "react-router-dom";
import HeartButton from "../product/HeartButton";

function ProductCard({ product }) {
  const navigateTo = useNavigate();
  let {
    id,
    image_link,
    api_featured_image,
    name,
    category,
    brand,
    price,
    product_colors,
    price_sign,
    product_type,
    rating,
  } = product;

  let { favorites } = useFavoritesProducts();

  let isProductFav = favorites
    ? favorites.filter((fav) => id === fav.product_id)
    : [];

  if (isProductFav?.length > 0)
    product = Object.assign({}, product, {
      isFav: true,
      favID: isProductFav[0].id,
    });
  else product = Object.assign({}, product, { isFav: false });

  function handleProductOnClick() {
    navigateTo(`/product/${id}`, { state: product });
  }
  return (
    <div
      key={id}
      className="group relative bg-three rounded-lg p-4 py-5 flex flex-col gap-2 items-center justify-around overflow-hidden cursor-pointer
      hover:outline hover:outline-two hover:outline-2 hover:animate-incScale"
    >
      <div
        className="w-full h-full absolute z-10"
        onClick={handleProductOnClick}
      ></div>
      {/* HEART ICON */}
      <HeartButton
        className={"absolute top-3 right-3 z-20"}
        product={product}
        heartSize={30}
      />
      {/* product_type */}
      {product_type && (
        <div className="z-10 absolute top-0 left-1/2 -translate-x-1/2 px-5 text-center bg-two font-black text-white">
          {product_type}
        </div>
      )}
      {/* IMAGE  */}
      <div className="img w-full max-w-40 min-h-52 max-h-52 sm:min-h-72 sm:max-h-72 overflow-hidden grid justify-center">
        <div className="w-full h-full">
          {<ProductImg src={image_link} /> && (
            <ProductImg src={api_featured_image} />
          )}
        </div>
      </div>
      {/* NAME */}
      <div className="text-xl text-center font-black">{name}</div>
      {/* RATING */}
      <RateStars rating={rating} />
      {/* BRAND */}
      {brand && (
        <div className="w-full">
          <span>brand:</span>{" "}
          <span className="font-black text-two">{brand}</span>
        </div>
      )}
      {/* CATEGORY */}
      {category && (
        <div className="w-full">
          category: <span className="font-black text-two">{category}</span>
        </div>
      )}
      {/* PRICE */}
      <div className="w-full text-xl font-black flex justify-end">
        {price}
        {price_sign ? price_sign : "$"}
      </div>
      {/* COLORS */}
      {product_colors.length > 0 && (
        <ProductCardColors colors={product_colors} />
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
