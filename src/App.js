import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home1 from "./components/Home1/home";
import Support from "./components/support/support";
import About from "./components/about/about";
import Tour from "./components/tour/tour";
import Service from "./components/service/service";
import Blog from "./components/blog/blog";
import Testimony from "./components/testimony/testimony";
import Question from "./components/Questions/question";
import Login from "./components/login/login";
import Footer from "./components/footer/footer";
import Movie from "./components/movies/movies";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/question" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
