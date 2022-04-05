import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { description, name, rating, imageURL } = review;
  return (
    <div>
      <div className="review">
        <img className=" w-1/3 mx-auto" src={imageURL} alt="" />
        <h1 className="text-3xl font-semibold pt-3">{name}</h1>
        <p className="text-2xl font-bold text-orange-500">{rating}</p>
        <p className="text-xl pt-1">{description}</p>
      </div>
    </div>
  );
};

export default Review;
