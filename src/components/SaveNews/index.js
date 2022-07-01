import React, { useContext, useState } from 'react'
import { app } from '../../services/firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { AuthContext } from '../../context/AuthContext'

const SaveNews = ({ news }) => {
  const { currentUser } = useContext(AuthContext)
  const [saved, setSaved] = useState(false)

  const db = getFirestore(app)

  /* const  getSaved = async () => {
    const q = query(collection(db ,currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    })
  } */

  /*  useEffect(() => {
   getSaved();
  }, [getSaved]); */

  const onHandleClick = async () => {
    console.log(currentUser.uid)
    try {
      const docRef = await addDoc(collection(db, currentUser.uid), {
        id: news.id,
        source: news.source.name,
        title: news.title,
        description: news.description,
        url: news.url,
        urlToImage: news.urlToImage,
        content: news.content,
      })
      console.log('Document written with ID: ', docRef.id)
      setSaved(true)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <button onClick={onHandleClick}>
      {saved ? <i className='bi bi-bookmark-fill'></i> : <i className='bi bi-bookmark'></i>}
    </button>
  )
}

export default SaveNews
