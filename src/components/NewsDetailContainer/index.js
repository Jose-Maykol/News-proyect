import React from 'react'
import CategoryContainer from '../CategoryContainer'
import CurrentContainer from '../CurrentContainer'
import CurrentList from '../CurrentList'
import FeatureContainer from '../FeatureContainer'
import './NewDetailContainer.css'

const NewsDetailContainer = () => {
  return (
    <div className='content-home'>
      <div className='content-news-detail'>
        <CurrentContainer />
        <CategoryContainer />
        <FeatureContainer />
        <CurrentList />
      </div>
    </div>
  )
}

export default NewsDetailContainer
