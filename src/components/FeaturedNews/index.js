import React, { useContext } from "react";
import { ApiContext } from '../../context';
import NewsContainer from '../NewsContainer';

const FeaturedNews = () => {

  const { Feature } = useContext(ApiContext);

  return (
    <div className="row" style={{ margin: "50px 30px 50px 30px" }}>
      {Feature ?
        <div>
          <div className="row col-12 d-flex justify-content-center my-2 ">
            <NewsContainer noticia={Feature} />
          </div>
        </div>
        : <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
}

export default FeaturedNews;