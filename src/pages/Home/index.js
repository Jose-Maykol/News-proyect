import React, {useEffect} from "react";
import FeaturedNews from "../../components/FeaturedNews";
import CurrentNews from "../../components/CurrentNews";
import getCurrentNews from "../../services/getCurrentNews";
import getFeaturedNews from "../../services/getFeaturedNews";

const Home = () => {

  useEffect(() => {
    getFeaturedNews()
      .then(data => console.log(data))
      .catch(e => console.warn(e))
    getCurrentNews()
      .then(data => console.log(data))
      .catch(e => console.warn(e))
  }, [] );

  return ( 
    <div>
      Este es el home
      <FeaturedNews/>
      <CurrentNews/>
    </div>
  );
}
 
export default Home;