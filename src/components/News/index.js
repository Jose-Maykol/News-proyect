import React from 'react'

const News = ({ news }) => {

    return (
        <div key={news.id}>
            <img src={news.urlToImage} className="d-block w-100" alt="..." style={{ maxHeight: "450px" }} />
            <div className="carousel-caption d-none d-md-block  bg-dark text-white">
                <h5>{news.title}</h5>
                <p>{news.description}</p>
            </div>
        </div>
    )
}

export default News