import React from "react";

const NewsDetails = ({ noticia: { author, content, description, publishedAt, title, urlToImage, url, source, id } }) => {

  return (
    <div key={id} className="col-8">
      <div className="title-new" >
        <div className="title-box">
          <h2>{source.name}</h2>
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        <h1
          style={{ lineHeight: "46px", fontSize: "32px", fontWeight: "bold" }}
        >
          {title}
        </h1>
        <h2
          style={{
            lineHeight: "46px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          className="card-text my-1"
        >
          {description}
        </h2>
      </div>
      <div className="d-flex flex-row" style={{ padding: "10px" }}>
        <img
          src={urlToImage}
          className="card-img-top img-fluid w-50"
          alt={title}
        />
        <div className="card-body d-flex flex-column justify-content-between align-items-start ">
          <p className="card-text my-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
