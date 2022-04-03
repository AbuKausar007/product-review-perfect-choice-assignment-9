import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="text-2xl font-bold py-8 flex gap-x-12 justify-center ">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
};

export default Header;
