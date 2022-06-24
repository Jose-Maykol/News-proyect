import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'
import './FeaturedNews.css'

const FeaturedNews = () => {
  const { Feature } = useContext(ApiContext)

  return (
    <div className='featured-news'>
      {Feature ? (
        <div className='featured-news-container'>
          {Feature.map((featuredNews) => (
            <div key={featuredNews.id} className='featured-news-item'>
              <img src={featuredNews.urlToImage} alt={featuredNews.title} />
              <div className='featured-news-content'>
                <div
                  className={`featured-news-name ${featuredNews.source.name
                    .replace(/ /g, '')
                    .replace(/\(|\)/g, '')}`}
                >
                  {featuredNews.source.name}
                </div>
                <h3>{featuredNews.title}</h3>
                <p>{featuredNews.description}</p>
                <Link to={`/detail/${featuredNews.id}`}>
                  <span> Leer mas.. </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )}
    </div>
  )
}

export default FeaturedNews
