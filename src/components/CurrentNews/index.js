import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import SaveNews from '../SaveNews'
import './CurrentNews.css'

const CurrentNews = () => {
  const { currentUser } = useContext(AuthContext)
  const { Current } = useContext(ApiContext)

  return (
    <div>
      {Current ? (
        Current.map((news) => (
          <div className='current-news-cart' key={news.id}>
            <img src={news.urlToImage} className='current-news-image' alt={news.title} />
            <div className='current-new-content'>
              <div className='current-new-top'>
                <p
                  className={`source-name ${news.source.name
                    .replace(/ /g, '')
                    .replace(/\(|\)/g, '')}`}
                >
                  {news.source.name}
                </p>
                {currentUser ? <SaveNews news={news} /> : null}
              </div>
              <h5 className='current-news-title'>{news.title}</h5>
              <p className='current-news-description'>{news.description}</p>
              <div className='current-news-button'>
                <Link to={`/detail/${news.id}`}>Leer más</Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='charging'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CurrentNews
