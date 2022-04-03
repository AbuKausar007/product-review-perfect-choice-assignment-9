import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { _id, description, name, rating, imageURL } = review;
  return (
    <div>
      <div className="review">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-2xl font-bold text-orange-500">{rating}</p>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Review;
