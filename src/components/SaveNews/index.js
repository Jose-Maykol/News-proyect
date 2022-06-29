import React, { useContext } from "react";
import { app } from '../../services/firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext'

const SaveNews = ({news}) => {

  const { currentUser } = useContext(AuthContext)

  console.table(news)

  const onHandleClick = async () => {
    console.log(currentUser.uid);
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, currentUser.uid), {
        id: news.id,
        source: news.source.name,
        title: news.title,
        description: news.description,
        url: news.url,
        urlToImage: news.urlToImage,
        content: news.content,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <button onClick={onHandleClick}>
      <i className="bi bi-bookmark"></i>
    </button>
  );
}
 
export default SaveNews;