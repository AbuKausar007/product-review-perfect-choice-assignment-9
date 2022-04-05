import React, { useContext } from "react";
import { ReviewContext } from "../../App";
import AllReviews from "../AllReviews/AllReviews";

const Reviews = () => {
  const [reviews] = useContext(ReviewContext);

  return (
    <div>
      <h1 className="text-5xl font-semibold  pb-10">
        What Our <span className="text-orange-500">Customer Says!</span>
      </h1>
      <div className="grid grid-cols-3 gap-8 w-4/5 m-auto pb-12">
        {reviews.map((review) => (
          <AllReviews key={review._id} review={review}></AllReviews>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
