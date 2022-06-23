import React, { useContext } from "react";
import { ApiContext } from '../../context';
import "./FeaturedNews.css"

const FeaturedNews = () => {

  const { Feature } = useContext(ApiContext);

  return (
    <div className="row" style={{ margin: "50px 30px 50px 30px" }}>
      {Feature ?
          <div className="featured-news-container" >
          {Feature.map( featuredNews =>
            <div className="featured-news-item">
              <img src={featuredNews.urlToImage} alt={featuredNews.title}/>
              <div className="featured-news-content">
                <div className={`featured-news-name ${featuredNews.source.name.replace(/ /g, "").replace(/\(|\)/g, "")}`}>
                  {featuredNews.source.name}
                </div>
                <h3>{featuredNews.title}</h3>
                <p>{featuredNews.description}</p>
                <a href="/"> Leer mas </a>
              </div>
            </div>
          )}
        </div>
        : <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
}

export default FeaturedNews;