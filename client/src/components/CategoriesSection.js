import React, { useEffect, useState } from "react";
import "../styles/categoriesSection.css";

export const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error)); // Move the catch block here
  }, []);
  return (
    <section className="categories-section">
      <h2>Categories</h2>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </section>
  );
};
