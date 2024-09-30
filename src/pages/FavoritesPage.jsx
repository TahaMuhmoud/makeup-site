import CustomPage from "../components/CustomPage";
import Button from "../components/Button";
import { useFavoritesProducts } from "../features/favotites/useFavoritesProducts";
import { useClearFavs } from "../features/favotites/useClearFavs";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

function FavoritesPage() {
  const { favorites: favs, isLoadingFavorites } = useFavoritesProducts();
  const { clearFavs, isClearing } = useClearFavs();
  if (isClearing) toast.loading("Clearing..");
  let favorites =
    favs?.length > 0 ? favs.map((product) => product.product) : [];

  if (isLoadingFavorites) return <Spinner />;
  return (
    <div className="">
      <div className="flex justify-end px-10 py-5">
        <Button
          disabled={favorites.length === 0}
          onClick={() => {
            if (favorites.length > 0) {
              clearFavs();
            }
          }}
        >
          CLEAR ALL FAVORITES
        </Button>
      </div>
      <CustomPage header={"Favorites"} products={favorites} />
    </div>
  );
}

FavoritesPage.propTypes = {};

export default FavoritesPage;
