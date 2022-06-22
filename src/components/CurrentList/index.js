import React, { useContext } from "react";
import { ApiContext } from '../../context';


const CurrentList = () => {

    const { Feature } = useContext(ApiContext);

    return (
        <div className="col-4">
            {Feature.map(news =>
                <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                    <div className="card-header">
                        <img src={news.urlToImage} style={{ width: "255px", height: "150px" }} alt="img-card" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <p className="card-text">{news.description}</p>
                    </div>
                </div>)}
        </div>
    )

}

export default CurrentList