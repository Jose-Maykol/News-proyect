import React, { Fragment, useContext } from 'react'
import Footer from '../../components/Footer'
import { ApiContext } from '../../context/ApiContext'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
  const { Category } = useContext(ApiContext)

  return (
    <Fragment>
      <div className='container-category-news'>
        <div className='title-new'>
          <div className='title-box'>
            <h2> Lista de Noticias </h2>
          </div>
        </div>
        {Category ? (
          Category.map((news) => (
            <div className='category-news-cart' key={news.id}>
              <img src={news.urlToImage} className='category-news-image' alt={news.title} />
              <div className='current-new-content'>
                <div
                  className={`source-name ${news.source.name
                    .replace(/ /g, '')
                    .replace(/\(|\)/g, '')}`}
                >
                  {news.source.name}
                </div>
                <h5 className='category-news-title'>{news.title}</h5>
                <p className='category-news-description'>{news.description}</p>
                <div className='category-news-button'>
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
      <Footer />
    </Fragment>
  )
}

export default Category
