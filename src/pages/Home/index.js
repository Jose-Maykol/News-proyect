import React, { Fragment } from "react";
import FeaturedNews from "../../components/FeaturedNews";
import CurrentNews from "../../components/CurrentNews";
import TitleTypeNews from "../../components/TitleTypeNews";
import Footer from '../../components/Footer'
import './Home.css'

const Home = () => {

  return (
    <Fragment>
      <div className="container content-home">
        <TitleTypeNews text="Noticias destacadas" />
        <FeaturedNews />
        <TitleTypeNews text="Noticias actuales" />
        <CurrentNews />
      </div>
      <Footer/>
    </Fragment>
  );
}

export default Home;