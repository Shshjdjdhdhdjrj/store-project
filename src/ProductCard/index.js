import React, { useState } from "react";
import "./index.css";
import { FaHeart, FaShoppingCart, FaFilter } from "react-icons/fa";

const ProductCard = ({ image, title, price }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  const toggleCart = () => {
    setIsInCart((prevState) => !prevState);
  };

  const toggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="image" />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <div className="actions">
        <button className={isLiked ? "liked" : ""} onClick={toggleLike}>
          <FaHeart /> {isLiked ? "Unlike" : "Like"}
        </button>
        <button className={isInCart ? "incart" : ""} onClick={toggleCart}>
          <FaShoppingCart /> {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
        <button className="filter" onClick={toggleFilters}>
          <FaFilter /> Filters
        </button>
      </div>
      {showFilters && (
        <div className="filter-options">
          <h4>Filter Options</h4>
          <div className="dropdown">
            <select>
              <option value="">Select Brand</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
              {/* Add more brand options */}
            </select>
          </div>
          <div className="dropdown">
            <select>
              <option value="">Select Price Range</option>
              <option value="0-50">$0 - $50</option>
              <option value="51-100">$51 - $100</option>
              {/* Add more price range options */}
            </select>
          </div>
          {/* Add more filtering options */}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
