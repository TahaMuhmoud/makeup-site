import PropTypes from "prop-types";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { CircleLoader } from "react-spinners";
import { useFavoritesProducts } from "../favotites/useFavoritesProducts";
import { useAddToFavs } from "../favotites/useAddToFavs";
import { useDeleteFromFavs } from "../favotites/useDeleteFromFavs";
import { COLOR_ONE, COLOR_TWO } from "../../utils/constants";

function HeartButton({ product, heartSize = 30, className }) {
  let { favorites } = useFavoritesProducts();

  const { addToFavs, isAdding } = useAddToFavs();

  const { deleteFavProduct, isDeleting } = useDeleteFromFavs();

  let isProductFav = favorites
    ? favorites.filter((fav) => product.id === fav.product_id)
    : [];

  function handleAddToFavs() {
    if (isProductFav[0]) {
      deleteFavProduct(isProductFav[0].id);
    } else {
      addToFavs({
        id: product.id,
        product,
        isFav: true,
      });
    }
  }

  return (
    <div className={className}>
      {isProductFav[0] ? (
        isDeleting ? (
          <CircleLoader size={heartSize} color={COLOR_ONE} />
        ) : (
          <RiHeart3Fill
            size={heartSize}
            color={COLOR_TWO}
            onClick={handleAddToFavs}
          />
        )
      ) : isAdding ? (
        <CircleLoader size={heartSize} color={COLOR_ONE} />
      ) : (
        <RiHeart3Line size={heartSize} onClick={handleAddToFavs} />
      )}
    </div>
  );
}

HeartButton.propTypes = {
  product: PropTypes.object,
  heartSize: PropTypes.number,
  className: PropTypes.string,
};

export default HeartButton;
