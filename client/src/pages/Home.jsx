import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
