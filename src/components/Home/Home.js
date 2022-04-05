import React, { useContext, useEffect } from "react";
import "./Home.css";
import img from "../../images/accessories.jpg";
import Review from "../Review/Review";
import { ReviewContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useContext(ReviewContext);
  const threeReviews = reviews.slice(0, 3);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [setReviews]);
  return (
    <div>
      <section className="home-container m-auto">
        <div className="">
          <h1 className="text-6xl text-left font-semibold font-sans ">
            Your <span className="orange-color">Perfect Choice!</span>
          </h1>
          <h2 className="text-6xl text-left font-semibold font-sans py-5">
            <span className="orange-color">Believe</span> In You.
          </h2>
          <h3 className="text-xl text-justify py-8 ">
            Always Perform an Initial Brand Audit Before You Begin. Find Out
            What People are Saying About You Online. Always, Add an Emotional
            Component to Your Messaging. High-quality Product Images Are the Key
            to Lasting Success. Consider Giving into the Video Vibes. Put an
            Emphasis on Eye-Catching.
          </h3>
          <button className=" buy-btn text-2xl font-bold  rounded-lg py-2 px-5 ">
            Buy Now
          </button>
        </div>
        <div className="banner-img">
          <img src={img} alt="" />
        </div>
      </section>
      <section>
        <h1 className="text-5xl font-semibold py-16">
          Customer <span className="orange-color">Reviews.</span>
        </h1>
        <div className="grid grid-cols-3 gap-8 w-4/5 m-auto">
          {threeReviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
        <button
          onClick={() => navigate("/reviews")}
          className="all-reviews-btn text-2xl font-bold mt-16 mb-16 rounded-lg  px-5 mx-auto py-2"
        >
          See All Reviews
        </button>
      </section>
    </div>
  );
};

export default Home;
