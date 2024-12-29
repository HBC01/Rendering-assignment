const Product = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  response = await response.json();
  return response;
};

export default Product;