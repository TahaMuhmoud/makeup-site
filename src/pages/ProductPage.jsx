import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductDescription from "../features/product/ProductDescription";
import Tag from "../components/Tag";
import Spinner from "../components/Spinner";
import { useCartProducts } from "../features/cart/useCartProducts";
import ProductImg from "../components/ProductImg";
import ColorSquare from "../components/ColorSquare";
import RateStars from "../components/RateStars";
import HeartButton from "../features/product/HeartButton";
import AddToCartButton from "../features/product/AddToCartButton";
import ProductColorsSection from "../features/product/ProductColorsSection";

function ProductPage() {
  let { state: product } = useLocation();

  const {
    image_link,
    api_featured_image,
    name,
    category,
    brand,
    price,
    product_colors,
    price_sign,
    product_type,
    currency,
    rating,
    description,
    tag_list,
  } = product;

  let { isLoading } = useCartProducts();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  product = Object.assign({}, product, {
    selectedColor: product_colors[selectedColorIndex],
  });

  function handleSelectedColor(index) {
    setSelectedColorIndex(index);
  }

  if (isLoading) return <Spinner />;
  return (
    <div className="p-5 pt-20 flex flex-col gap-10">
      <div className="w-full  grid grid-cols-3 lg:grid-cols-6 items-center gap-5 relative">
        {rating && (
          <div className="w-20 aspect-square rounded-full border-4 border-two text-two absolute left-0 top-0 sm:left-10 grid place-items-center text-2xl">
            {rating}
          </div>
        )}
        <div className="col-span-3 lg:col-span-2 xl:col-span-3 grid place-items-center">
          {<ProductImg src={image_link} /> && (
            <ProductImg src={api_featured_image} />
          )}
        </div>
        <div className="col-span-4 xl:col-span-3 flex flex-col gap-5">
          {/* NAME */}
          <div className="text-4xl font-black italic">{name}</div>
          {/* RATING */}
          <RateStars rating={rating} />
          {/* BRAND */}
          {brand && (
            <div className="flex gap-5">
              <span className="text-2xl">brand:</span>
              <span className="font-logo text-3xl italic font-black text-two">
                {brand}
              </span>
            </div>
          )}
          {/* CATEGORY */}
          {category && (
            <div className="flex gap-5">
              <span className="text-2xl">category:</span>
              <span className="font-black text-2xl text-two">{category}</span>
            </div>
          )}
          {/* TYPE */}
          {product_type && (
            <div className="flex gap-5">
              <span className="text-2xl">product type:</span>
              <span className="text-3xl font-black text-two">
                {product_type}
              </span>
            </div>
          )}
          {/* COLORS */}
          {product_colors?.length > 0 && (
            <div className="flex gap-3 flex-wrap">
              {product_colors?.map((color, i) => (
                <ColorSquare
                  key={i}
                  color={color}
                  className={
                    product.selectedColor == color
                      ? "border-4 shadow-black shadow-['inset_2px_2px_2px_2px_black'] "
                      : ""
                  }
                  handleSelectedColor={() => handleSelectedColor(i)}
                />
              ))}
            </div>
          )}
          {/* PRICE */}
          <div className="w-full text-5xl italic font-black flex items-end justify-end gap-3 md:pr-10">
            <span>
              {price}
              {price_sign ? price_sign : "$"}
            </span>
            {currency && (
              <span className="text-lg text-two">{`"${currency}"`}</span>
            )}
          </div>
          <div className="flex justify-center gap-5 lg:justify-end  md:pr-10">
            <HeartButton product={product} heartSize={40} />

            <div className="flex gap-2">
              <AddToCartButton
                innerText={`Add To Cart`}
                product={product}
                selectedColor={product_colors[selectedColorIndex]}
                className={"w-full"}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductDescription description={description} />
      </div>
      {product_colors.length > 0 && (
        <ProductColorsSection colors={product_colors} />
      )}
      {tag_list?.length > 0 && (
        <div className="flex flex-col gap-5">
          <div className="section-header ">Tags</div>
          <div className="flex flex-wrap gap-3 px-10">
            {tag_list.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
