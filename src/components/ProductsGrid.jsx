import PropTypes from "prop-types";
import ProductCard from "../features/products/ProductCard";

function ProductsGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {products.map((product = {}) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.array,
};

export default ProductsGrid;
