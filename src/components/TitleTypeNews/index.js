import React from 'react'
import './TitleTypeNews.css'

const TitleCurrentNews = ({ text }) => {
  return (
    <div className='title-new'>
      <div className='title-box'>
        <h2> {text} </h2>
      </div>
    </div>
  )
}

export default TitleCurrentNews
