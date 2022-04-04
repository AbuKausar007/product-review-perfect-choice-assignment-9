import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../images/error.jpg";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-4 w-3/4 mx-auto mt-12">
      <div className="flex flex-col content-center justify-center">
        <h1 className="text-5xl font-semibold">
          You are trying to access non existing page!
        </h1>
        <h2 className="text-3xl py-6 text-orange-500 font-bold">
          Your better go to home page.
        </h2>
        <button
          onClick={() => navigate("/")}
          className=" home-page-btn text-2xl font-bold mt-16 mb-16 rounded-lg  px-5 mx-auto py-2"
        >
          HOME PAGE
        </button>
      </div>
      <div className="error-img ">
        <img src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
