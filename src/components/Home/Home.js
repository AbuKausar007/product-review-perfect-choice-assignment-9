import React, { useEffect, useState } from "react";
import "./Home.css";
import img from "../../images/accessories.jpg";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section className="home-container m-auto">
        <div className="">
          <h1 className="text-6xl text-left font-semibold font-sans ">
            Your Perfect Choice!
          </h1>
          <h2 className="text-4xl text-left font-semibold font-sans py-5">
            Believe In You.
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
        <h1 className="text-5xl font-semibold py-16">Customer Reviews.</h1>
        <div className="grid grid-cols-3 gap-8 w-4/5 m-auto">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
