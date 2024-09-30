import PropTypes from "prop-types";
import Spinner from "./Spinner";
import ProductsGrid from "./ProductsGrid";
import Pagination from "./Pagination";
import { getRangOfPage } from "../utils/helpers";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
import FilterSidebar from "./FilterSidebar";
import FilterHeader from "./FilterHeader";
import { CgClose } from "react-icons/cg";
import NoProducts from "./NoProducts";

function CustomPage({
  header,
  type,
  filterHeaderSelects = [],
  isLoadingProducts = false,
  products = [],
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  let paramsObject = Object.create({});
  filterHeaderSelects.map((item) => {
    paramsObject = {
      ...paramsObject,
      [item.searchParam]: searchParams.get(item.searchParam),
    };
  });
  let selectedFilters = Object.entries(paramsObject).filter(
    (it) => it[1] != null
  );

  // SORT

  let sortVal = searchParams.get("sort");
  if (sortVal == "price desc") {
    products = products
      ?.slice()
      .sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (sortVal == "price asc") {
    products = products
      ?.slice()
      .sort((a, b) => Number(a.price) - Number(b.price));
  }

  // product_type;
  let product_type = searchParams.get("product_type");

  if (product_type) {
    products = products?.filter(
      (product) => product["product_type"] == product_type.toLowerCase()
    );
  }

  // tag_list;
  let tag = searchParams.get("tag");
  if (tag) {
    products = products?.filter((product) => product["tag_list"].includes(tag));
    console.log(products);
  }

  //category
  let category = searchParams.get("category");
  if (category) {
    products = products?.filter((product) => product["category"] == category);
  }

  // brand;
  let brand = searchParams.get("brand");

  if (brand) {
    products = products?.filter((product) => product["brand"] == brand);
  }

  let currPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const { from, to } = getRangOfPage(products?.length, currPage, PAGE_SIZE);
  return (
    <div className="p-4">
      <div className="md:ml-10 text-center md:text-left">
        <span className="section-header text-two">{header}</span>{" "}
        {type && <span>({type})</span>}
      </div>
      <FilterHeader haveFilteOptions={filterHeaderSelects.length > 0} />
      {isLoadingProducts ? (
        <Spinner />
      ) : (
        <div className="flex gap-5">
          {filterHeaderSelects.length > 0 && (
            <FilterSidebar filterHeaderSelects={filterHeaderSelects} />
          )}

          <div className="w-full flex flex-col gap-3">
            {selectedFilters.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-lg">Selected Filters:</span>

                {selectedFilters.map((filter, i) => (
                  <div
                    key={i}
                    className="bg-three text-lg p-3 flex items-center gap-2"
                  >
                    <span>{filter[1]}</span>
                    <CgClose
                      cursor="pointer"
                      onClick={() => {
                        searchParams.delete(filter[0]);
                        setSearchParams(searchParams);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            {products.length > 0 ? (
              <ProductsGrid products={products?.slice(from, to + 1)} />
            ) : (
              <NoProducts />
            )}
          </div>
        </div>
      )}
      <Pagination numOfItems={products?.length} />
    </div>
  );
}

CustomPage.propTypes = {
  header: PropTypes.string,
  type: PropTypes.string,
  filterHeaderSelects: PropTypes.array,
  isLoadingProducts: PropTypes.bool,
  products: PropTypes.array,
};

export default CustomPage;
