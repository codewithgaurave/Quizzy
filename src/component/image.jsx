import React from "react";
import { useLocation } from "react-router";
import "./image.css";

const Image = () => {
  const location = useLocation();
  const { photo } = location.state || {};
  console.log(photo);

  return (
    <div class="cart-item">
      <div class="item-details">
        <h1 class="item-title">{photo.title}</h1>
        <h3 class="item-name">Name: {photo.name}</h3>
        <h4 class="item-price">Price: ₹{photo.price}</h4>
      </div>
      <div class="item-image">
        <img src={photo.image} alt="Product Image" />
      </div>
    </div>
  );
};

export default Image;
