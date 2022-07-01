import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'
import { AuthContext } from '../../context/AuthContext'
import SaveNews from '../../components/SaveNews'
import './Search.css'

const Search = () => {
  const { LimitCurrent } = useContext(ApiContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='search-container'>
      <div className='title-new'>
        <div className='title-box'>
          <h2> Lista de Noticias </h2>
        </div>
      </div>
      {LimitCurrent.length > 0 ? (
        LimitCurrent.map((news) => (
          <div className='current-news-cart' key={news.id}>
            <img src={news.urlToImage} className='search-news-image' alt={news.title} />
            <div className='current-new-content'>
              <div className='search-new-top'>
                <p
                  className={`source-name ${news.source.name
                    .replace(/ /g, '')
                    .replace(/\(|\)/g, '')}`}
                >
                  {news.source.name}
                </p>
                {currentUser ? <SaveNews news={news} /> : null}
              </div>
              <h5 className='search-news-title'>{news.title}</h5>
              <p className='search-news-description'>{news.description}</p>
              <div className='search-news-button'>
                <Link to={`/detail/${news.id}`}>Leer más</Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ marginTop: '10rem', textAlign: 'center' }}>No hay Coincidencias</h1>
      )}
    </div>
  )
}

export default Search
