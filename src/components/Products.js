import Product from "./Product";
import products from "../products";
const Products = () => {
  return (
    <>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
};

export default Products;
