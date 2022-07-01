import React, { useContext, useEffect, useState, useCallback } from 'react'
import { getDocs, getFirestore, collection } from 'firebase/firestore'
import { app } from '../../services/firebase'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Save.css'

const Save = () => {
  const { currentUser } = useContext(AuthContext)
  const [data, setData] = useState([])
  const db = getFirestore(app)

  const getNews = useCallback(async () => {
    const docSnap = await getDocs(collection(db, currentUser.uid))
    let arr = []
    docSnap.forEach((doc) => {
      arr.push(doc.data())
    })
    return setData(arr)
  }, [db, currentUser.uid])

  useEffect(() => {
    getNews()
  }, [getNews])
  console.log(data)

  return (
    <div className='saved-container'>
      {data.map((news) => (
        <div className='current-news-cart' key={news.id}>
          <img src={news.urlToImage} className='current-news-image' alt={news.title} />
          <div className='current-new-content'>
            <div className='current-new-top'>
              <p className={`source-name ${news.source.replace(/ /g, '').replace(/\(|\)/g, '')}`}>
                {news.source}
              </p>
            </div>
            <h5 className='current-news-title'>{news.title}</h5>
            <p className='current-news-description'>{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Save
