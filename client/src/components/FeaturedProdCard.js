import React from "react";
import "../styles/featuredprodcard.css";

export const FeaturedProdCard = ({ product }) => {
  return (
    <div className="featured-product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};
