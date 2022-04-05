import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useState } from "react";
import AllReviews from "./components/AllReviews/AllReviews";

export const ReviewContext = createContext();

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="App">
      <ReviewContext.Provider value={[reviews, setReviews]}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route
            path="/all-reviews"
            element={<AllReviews></AllReviews>}
          ></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ReviewContext.Provider>
    </div>
  );
}

export default App;
