import "./product.css";
const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image}></img>
      <div className="product-info">
        <p>{product.name}</p>
        <p>${product.price}</p>
        <button className="addToCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
