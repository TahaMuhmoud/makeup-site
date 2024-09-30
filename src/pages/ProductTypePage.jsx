import { useParams } from "react-router-dom";
import CustomPage from "../components/CustomPage";
import { useProductTypeProducts } from "../features/product-type/useProductTypeProducts";
import { BRANDS, CATEGORIES, TAGS } from "../utils/constants";
const HEADER_PRODUCT_TYPE_FILTER = [
  {
    label: "category",
    searchParam: "category",
    options: ["no-filter", ...CATEGORIES],
  },
  {
    label: "brands",
    searchParam: "brand",
    options: ["no-filter", ...BRANDS],
  },
  { label: "tag", searchParam: "tag", options: ["no-filter", ...TAGS] },
];
function ProductTypePage() {
  const { name } = useParams();

  let { isLoading, products } = useProductTypeProducts();

  return (
    <CustomPage
      header={name}
      type="Product Type"
      isLoadingProducts={isLoading}
      filterHeaderSelects={HEADER_PRODUCT_TYPE_FILTER}
      products={products}
    />
  );
}

ProductTypePage.propTypes = {};

export default ProductTypePage;
