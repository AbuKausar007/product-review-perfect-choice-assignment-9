import React, { useContext } from "react";
import { ReviewContext } from "../../App";
import AllReviews from "../AllReviews/AllReviews";

const Reviews = () => {
  const [reviews] = useContext(ReviewContext);

  return (
    <div className="grid grid-cols-3 gap-8 w-4/5 m-auto pb-12">
      {reviews.map((review) => (
        <AllReviews key={review._id} review={review}></AllReviews>
      ))}
    </div>
  );
};

export default Reviews;
