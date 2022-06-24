import React, { useContext } from "react";
import { ApiContext } from '../../context/ApiContext';
import { Link } from "react-router-dom";
import './CurrentNews.css'

const CurrentNews = () => {

  const { Current } = useContext(ApiContext);

  return (
    <div>
      {Current ?
        Current.map(news =>
          <div className="current-news-cart" key={news.id}>
            <img
              src={news.urlToImage}
              className="current-news-image" alt={news.title}
            />
            <div className="current-new-content">
              <div className={`source-name ${news.source.name.replace(/ /g, "").replace(/\(|\)/g, "")}`}>{news.source.name}</div>
              <h5 className="current-news-title">{news.title}</h5>
              <p className="current-news-description">{news.description}</p>
              <div className="current-news-button">
                <Link to={`/detail/${news.id}`}>
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        )
        : <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
}

export default CurrentNews;