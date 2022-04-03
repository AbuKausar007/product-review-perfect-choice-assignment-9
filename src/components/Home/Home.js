import React from "react";
import "./Home.css";
import img from "../../images/accessories.jpg";

const Home = () => {
  return (
    <div className="home-container m-auto">
      <div className="">
        <h1 className="text-6xl text-left font-semibold font-sans ">
          Your Perfect Choice!
        </h1>
        <h2 className="text-4xl text-left font-semibold font-sans py-5">
          Believe In You.
        </h2>
        <h3 className="text-xl text-justify py-8 ">
          Always Perform an Initial Brand Audit Before You Begin. Find Out What
          People are Saying About You Online. Always, ALWAYS Add an Emotional
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
    </div>
  );
};

export default Home;
