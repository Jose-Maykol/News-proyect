import React from "react";
import FeaturedNews from "../../components/FeaturedNews";
import CurrentNews from "../../components/CurrentNews";
import TittleCurrentNews from "../../components/TittleCurrentNews";
import TittleFeatureNews from "../../components/TittleFeatureNews";

const Home = () => {

  return (
    <div className="container my-5">
      <TittleFeatureNews />
      <FeaturedNews />
      <TittleCurrentNews />
      <CurrentNews />
    </div>
  );
}

export default Home;