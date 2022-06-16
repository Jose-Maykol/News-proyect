import React, { useState, createContext, useEffect } from 'react';
import { API_KEY, API_URL } from "./services/settings";

export const ApiContext = createContext()

export const ContextProvider = ({ children }) => {

    const [Feature, setFeature] = useState(null)
    const [Current, setCurrent] = useState(null)
    const [LimitCurrent, setLimitCurrent] = useState(null);

    const getCurrentNews = async () => {
        let now = new Date();
        let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        let date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}T${time}`;
        return await fetch(
            `${API_URL}/top-headlines?sources=infobae,google-news-ar,cnn-es,el-mundo,la-gaceta,la-nacion,marca&from=${date}&apiKey=${API_KEY}`
        ).then(res => res.json()).then(res => setCurrent(res.articles))
    }

    const getFeaturedNews = async () => {
        return await fetch(
            `${API_URL}/top-headlines?country=ar&pageSize=4&apiKey=${API_KEY}`
        ).then(res => res.json()).then(res => setFeature(res.articles));
    }



    useEffect(() => {
        getCurrentNews();
        getFeaturedNews();
    }, [])

    return (
        <ApiContext.Provider value={{ getCurrentNews, getFeaturedNews, Feature, Current, setLimitCurrent, LimitCurrent }}>
            {children}
        </ApiContext.Provider>
    )
}

