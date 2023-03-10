import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Slider />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
