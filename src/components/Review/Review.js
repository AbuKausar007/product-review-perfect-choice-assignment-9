import React from "react";

const Review = ({ review }) => {
  const { _id, description, name, rating, imageURL } = review;
  return (
    <div>
      <h1>Review card</h1>
    </div>
  );
};

export default Review;
