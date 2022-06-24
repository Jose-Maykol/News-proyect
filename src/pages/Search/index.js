import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'

const Search = () => {
  const { LimitCurrent } = useContext(ApiContext)

  console.log(LimitCurrent)

  return (
    <div style={{ marginTop: '150px' }}>
      {LimitCurrent.length > 0 ? (
        LimitCurrent.map((news) => (
          <div key={news.id}>
            <div className='card d-flex flex-row mb-2 p-3 my-3 mx-5'>
              <img src={news.urlToImage} className='card-img-top img-fluid w-50' alt={news.title} />
              <div className='card-body d-flex flex-column justify-content-between align-items-start '>
                <div className=' p-2 bg-primary rounded-3 my-1'>{news.source.name}</div>
                <h5 className='card-title my-1'>{news.title}</h5>
                <p className='card-text my-1'>{news.description}</p>
                <div className='align-self-end'>
                  <Link to={`/detail/${news.id}`}>
                    <span className='btn btn-dark'> Leer más</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 style={{ marginTop: '10rem', textAlign: 'center' }}>No hay Coincidencias</h1>
      )}
    </div>
  )
}

export default Search
