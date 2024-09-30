import { useNavigate } from "react-router-dom";
import ByBrands from "../features/home/ByBrands";
import ByProductTypes from "../features/home/ByProductTypes";
import LandingSection from "../features/home/LandingSection";
import ProductsGrid from "../components/ProductsGrid";
import { BRANDS, PRODUCT_TYPES } from "../utils/constants";
import ShowMoreButton from "../components/ShowMoreButton";
import { useProductsMostReated } from "../features/home/useProductsMostReated";

function Home() {
  const navigate = useNavigate();
  const { mostRatedProducts } = useProductsMostReated(4.99);

  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-10">
      <LandingSection />
      <ByBrands brands={BRANDS} />
      <ByProductTypes types={PRODUCT_TYPES} />

      <div className="p-3">
        <div className="section-header text-two flex flex-col items-center pb-5 text-center">
          Top Rated
        </div>
        <ProductsGrid products={mostRatedProducts.slice(0, 20)} />{" "}
        <div className="w-full flex justify-center p-5">
          {" "}
          <ShowMoreButton
            innerText={"SHOW MORE"}
            showIcon={false}
            className="rounded-lg w-full"
            onClick={() => navigate("/all")}
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
