import React, { useState, useEffect } from "react";
import "../styles/featuredproducts.css";
import { FeaturedProdCard } from "./FeaturedProdCard";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/featured-products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="featured-section">
      <h2>Featured Products</h2>
      <div className="featured-products">
        {Array.isArray(products) &&
          products.map((product) => (
            <FeaturedProdCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};
