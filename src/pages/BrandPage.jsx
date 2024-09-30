import { useParams } from "react-router-dom";
import { useBrandProducts } from "../features/brand/useBrandProducts";
import { CATEGORIES, PRODUCT_TYPES, TAGS } from "../utils/constants";
import CustomPage from "../components/CustomPage";

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

function BrandPage() {
  const { name } = useParams();

  let { isLoading, products } = useBrandProducts();

  return (
    <CustomPage
      header={name}
      type="brand"
      isLoadingProducts={isLoading}
      filterHeaderSelects={HEADER_BRAND_FILTER}
      products={products}
    />
  );
}

export default BrandPage;
