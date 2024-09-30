import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useContext, useState } from "react";
import { SearchOverlayContext } from "../../context/SearchOverlayContext";
import { useProducts } from "../products/useProducts";
import Spinner from "../../components/Spinner";
import { useDarkMode } from "../../context/useDarkMode";

function SearchOverlay() {
  const [darkMode] = useDarkMode();
  const { isLoading, products } = useProducts();
  const [, setShowSearchOverlay] = useContext(SearchOverlayContext);

  const [searchedProducts, setSearchedProducts] = useState([]);

  const navigate = useNavigate();

  function handleSearch(searchedText) {
    let x = products.filter(
      (product) =>
        searchedText !== "" &&
        product.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    setSearchedProducts(x);
  }

  function handleOnClick(product) {
    navigate(`/product/${product.id}`, { state: product });
    setShowSearchOverlay(false);
  }
  function handleCloseOverlay() {
    setShowSearchOverlay(false);
  }
  return (
    <div className="w-full min-h-screen bg-black/70 fixed top-0 left-0 z-[1000000] grid place-items-center p-1 sm:p-5">
      <div
        className="absolute top-0 left-0 w-full h-full bg-transparent -z-10"
        onClick={handleCloseOverlay}
      ></div>
      <div className="bg-white w-full md:w-[700px] h-[600px] rounded-2xl p-2 flex flex-col gap-5">
        {!isLoading ? (
          <>
            <div className="w-full">
              <SearchBar onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <div className="w-full h-full overflow-hidden">
              {searchedProducts.length > 0 ? (
                <div className="h-full overflow-y-scroll">
                  {searchedProducts.map((product, i) => (
                    <div
                      key={i}
                      className={`p-2 pr-5 flex items-center justify-between gap-3 hover:bg-gray-500`}
                      onClick={() => handleOnClick(product)}
                    >
                      <div className="flex items-center gap-5">
                        <div className="img min-h-16 max-h-16 min-w-16 max-w-16 overflow-hidden bg-red-">
                          {(
                            <img
                              src={product.image_link}
                              alt=""
                              className={`${
                                !darkMode ? "mix-blend-multiply" : ""
                              } h-full w-full overflow-hidden transition-all duration-1000 group-hover:scale-125`}
                            />
                          ) && (
                            <img
                              src={product.api_featured_image}
                              alt=""
                              className={`${
                                !darkMode ? "mix-blend-multiply" : ""
                              } h-full w-full overflow-hidden transition-all duration-1000 group-hover:scale-125`}
                            />
                          )}
                        </div>
                        <div className="">
                          <div className="">{product.name}</div>
                          <div className="text-two hidden sm:block">
                            {product.product_type}
                          </div>
                        </div>
                      </div>
                      <div className="font-logo sm:text-xl italic font-black text-two hidden sm:block">
                        {product.brand}
                      </div>
                      <div className="sm:text-xl italic font-black text-two sm:hidden">
                        {product.product_type}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full h-full grid place-items-center text-4xl text-center font-black italic text-three">
                  No Searched Products
                </div>
              )}
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

SearchOverlay.propTypes = {};

export default SearchOverlay;
