import React from 'react'

const NewsDetails = ({ noticia: { author, content, description, publishedAt, title, urlToImage, url, source } }) => {

    return (
        <div style={{ marginTop: "150px" }}>
            <div className="card d-flex flex-row mb-2 p-3 my-3 mx-5" key={publishedAt} >
                <img
                    src={urlToImage}
                    className="card-img-top img-fluid w-50" alt="..."
                />
                <div className="card-body d-flex flex-column justify-content-between align-items-start ">
                    <div className=" p-2 bg-primary rounded-3 my-1">{source.name}</div>
                    <h5 className="card-title my-1">{title}</h5>
                    <p className="card-text my-1">{description}</p>
                    <p className="card-text my-1">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsDetails