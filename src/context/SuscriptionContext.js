import React, { createContext, useContext, useEffect, useState } from 'react'
import { getDocs, getFirestore, collection, where, query, updateDoc, doc, getDoc } from 'firebase/firestore'
import { app } from '../services/firebase'
import { AuthContext } from './AuthContext'


export const SuscriptionContext = createContext()

export const SuscriptionProvider = ({ children }) => {
  const db = getFirestore(app)

  const [tittle, setTittle] = useState('')
  const [cash, setCash] = useState('')
  const [bool, setBool] = useState(false)
  const { currentUser } = useContext(AuthContext)


  const suscribeToggle = async (email) => {
    const docSnap = query(collection(db, 'users'), where('email', '==', email))
    const querySnap = await getDocs(docSnap)
    let res = ''
    querySnap.forEach((doc) => {
      res = doc.id
    });
    const update = doc(db, 'users', res);
    await updateDoc(update, {
      subscribed: true
    })
  }

  const getBoolean = async () => {
    if (currentUser) {
      const docSnap = query(collection(db, 'users'), where('email', '==', currentUser.email))
      const querySnap = await getDocs(docSnap)
      let res = ''
      querySnap.forEach((doc) => {
        res = doc.id
      });
      const docRef = doc(db, 'users', res);
      const refSnap = await getDoc(docRef)
      setBool(refSnap.data().subscribed)
    }
  }

  useEffect(() => {
    getBoolean()
  })



  return (
    <SuscriptionContext.Provider value={{ setTittle, tittle, cash, setCash, suscribeToggle, getBoolean, bool }}>
      {children}
    </SuscriptionContext.Provider>
  )
}
