import axios from "axios";
// GET ALL PRODUCTS
export async function getProducts() {
  let { data } = await axios
    .get(`https://makeup-api.herokuapp.com/api/v1/products.json`)
    .catch((err) => {
      throw new Error(err);
    });
  return data;
}

// GET ALL MOST RATED PRODUCTS
export async function getMostRatedProducts(from) {
  let { data } = await axios
    .get(
      `https://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=${from}`
    )
    .catch((err) => {
      throw new Error(err);
    });
  return data;
}

// GET ALL BRAND PRODUCTS
export async function getProductsByBrand(brand) {
  let { data } = await axios
    .get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .catch((err) => {
      throw new Error(err);
    });
  return data;
}

// GET ALL PRODUCT TYPE PRODUCTS
export async function getProductsByProduct(product) {
  let { data } = await axios
    .get(
      `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}`
    )
    .catch((err) => {
      throw new Error(err);
    });
  return data;
}
