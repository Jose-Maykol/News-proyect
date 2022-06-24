import React, { useState, createContext, useEffect } from 'react'
import { API_KEY, API_URL } from '../services/settings'
import { v4 as uuidv4 } from 'uuid'

export const ApiContext = createContext()

export const ContextProvider = ({ children }) => {
  const [Feature, setFeature] = useState(null)
  const [Current, setCurrent] = useState(null)
  const [LimitCurrent, setLimitCurrent] = useState(null)
  const [Category, setCategory] = useState(null)

  const getCurrentNews = async () => {
    let now = new Date()
    let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    let date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}T${time}`
    let res = await fetch(
      `${API_URL}/top-headlines?sources=infobae,google-news-ar,cnn-es,el-mundo,la-gaceta,la-nacion,marca&from=${date}&apiKey=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((res) => res.articles)
    let arr = []
    res.map((ele) => arr.push({ ...ele, id: uuidv4() }))
    setCurrent(arr)
  }

  const getFeaturedNews = async () => {
    let res = await fetch(`${API_URL}/top-headlines?country=ar&pageSize=4&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((res) => res.articles)
    let arr = []
    res.map((ele) => arr.push({ ...ele, id: uuidv4() }))
    setFeature(arr)
  }

  const getCategoryNews = async (CATEGORY) => {
    let res = await fetch(
      `${API_URL}/top-headlines?country=ar&pageSize=10&apiKey=${API_KEY}&category=${CATEGORY}`,
    )
      .then((res) => res.json())
      .then((res) => res.articles)
    let arr = []
    res.map((ele) => arr.push({ ...ele, id: uuidv4() }))
    setCategory(arr)
  }

  useEffect(() => {
    getCurrentNews()
    getFeaturedNews()
  }, [])

  return (
    <ApiContext.Provider
      value={{
        getCurrentNews,
        getFeaturedNews,
        Feature,
        Current,
        setLimitCurrent,
        LimitCurrent,
        getCategoryNews,
        Category,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}
