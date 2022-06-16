import React from 'react'

const TitleCurrentNews = ({text}) => {
    return (
        <div className="row">
            <div className="row col-12">
                <div className="col-5" style={{ borderBottom: "5px solid", backgroundColor: "black" }}>
                    <h1 className='fs-4' style={{ color: "white", marginBottom: "0" }}>{text}</h1>
                </div>
                <div className="col-7" style={{ borderBottom: "5px solid" }}>
                </div>
            </div>
        </div>
    )
}

export default TitleCurrentNews