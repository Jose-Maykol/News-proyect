import React, { useContext, useEffect, useState, useCallback } from 'react'
import { getDocs, getFirestore, collection, doc, deleteDoc, query, where } from 'firebase/firestore'
import { app } from '../../services/firebase'
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

  const deleteNews = async (id) => {
    const docSnap = query(collection(db, currentUser.uid), where('id', '==', id))
    const querySnap = await getDocs(docSnap)
    let res = ''
    querySnap.forEach((doc) => {
      res = doc.id
    })
    await deleteDoc(doc(db, currentUser.uid, res))
    getNews()
  }

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <div className='saved-container'>
      <div className='title-new'>
        <div className='title-box'>
          <h2> Lista de noticias guardadas </h2>
        </div>
      </div>
      {data.map((news) => (
        <div className='current-news-cart' key={news.id}>
          <img src={news.urlToImage} className='current-news-image' alt={news.title} />
          <div className='current-new-content'>
            <div className='current-new-top'>
              <p className={`source-name ${news.source.replace(/ /g, '').replace(/\(|\)/g, '')}`}>
                {news.source}
              </p>
              <button onClick={() => deleteNews(news.id)}>
                <i className='bi bi-trash3-fill'></i>
              </button>
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
