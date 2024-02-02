import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import MainHome from "../layouts/MainHome";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
