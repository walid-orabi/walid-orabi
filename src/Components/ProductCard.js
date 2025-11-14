import "../Assets/ProductCard.css";
import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CardContext);

  if (!product) {
    return <div className="product-card">No product data</div>;
  }

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;