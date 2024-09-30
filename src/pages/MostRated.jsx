import CustomPage from "../components/CustomPage";
import { useProductsMostReated } from "../features/home/useProductsMostReated";
import { CATEGORIES, PRODUCT_TYPES, TAGS } from "../utils/constants";
const HEADER_BRAND_FILTER = [
  {
    label: "category",
    searchParam: "category",
    options: ["no-filter", ...CATEGORIES],
  },
  {
    label: "product-type",
    searchParam: "product_type",
    options: ["no-filter", ...PRODUCT_TYPES],
  },
  { label: "tag", searchParam: "tag", options: ["no-filter", ...TAGS] },
];
function MostRated() {
  const { isLoading, mostRatedProducts } = useProductsMostReated();
  return (
    <CustomPage
      header={"Most rated"}
      type="brand"
      isLoadingProducts={isLoading}
      filterHeaderSelects={HEADER_BRAND_FILTER}
      products={mostRatedProducts}
    />
  );
}

MostRated.propTypes = {};

export default MostRated;
