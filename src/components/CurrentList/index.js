import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import './CurrentList.css'

const CurrentList = () => {
  const { Feature } = useContext(ApiContext)

  return (
    <div className='container-current-list'>
      <div className='title-new'>
        <div className='title-box'>
          <h2> Otras noticias </h2>
        </div>
      </div>
      {Feature.map((news) => (
        <div className='current-list-item' >
            <img src={news.urlToImage} alt={news.title} />
          <div className='current-list-body'>
            <div
              className={`source-name ${news.source.name
                .replace(/ /g, '')
                .replace(/\(|\)/g, '')}`}
            >
              {news.source.name}
            </div>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CurrentList
