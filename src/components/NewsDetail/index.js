import React from 'react'
import './NewsDetail.css'

const NewsDetails = ({
  noticia: { author, content, description, publishedAt, title, urlToImage, url, source, id },
}) => {
  return (
    <div key={id} className='container-news-detail'>
      <div className='title-new'>
        <div className='title-box'>
          <h2>{source.name}</h2>
        </div>
      </div>
      <div className='news-detail-body'>
        <h1>{title}</h1>
        <h3> {description} </h3>
      </div>
      <div className='news-detail-content'>
        <img src={urlToImage} className='' alt={title} />
        <p>
          {content} {content} {content} {content} {content}
        </p>
        <a href={url}>{url}</a>
      </div>
    </div>
  )
}

export default NewsDetails
