import CustomPage from "../components/CustomPage";
import { useProducts } from "../features/products/useProducts";
import { BRANDS, CATEGORIES, PRODUCT_TYPES, TAGS } from "../utils/constants";
const HEADER_ALL_FILTER = [
  {
    label: "brands",
    searchParam: "brand",
    options: ["no-filter", ...BRANDS],
  },
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
function AllProducts() {
  let { isLoading, products } = useProducts();
  products = products?.sort((a, b) => b.updated_at - a.updated_at);

  return (
    <CustomPage
      header={"ALL PRODUCTS"}
      type="all"
      isLoadingProducts={isLoading}
      filterHeaderSelects={HEADER_ALL_FILTER}
      products={products}
    />
  );
}

AllProducts.propTypes = {};

export default AllProducts;
