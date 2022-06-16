import React from "react";
import FeaturedNews from "../../components/FeaturedNews";
import CurrentNews from "../../components/CurrentNews";
import TitleTypeNews from "../../components/TitleTypeNews";

import './Home.css'

const Home = () => {

  return (
    <div className="container content-home">
      <TitleTypeNews text="Noticias destacadas"/>
      <FeaturedNews />
      <TitleTypeNews text="Noticias actuales"/>
      <CurrentNews />
    </div>
  );
}

export default Home;