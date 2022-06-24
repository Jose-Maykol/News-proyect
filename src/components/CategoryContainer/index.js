import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../../context/ApiContext'
import NewsDetails from '../NewsDetail'

const CategoryContainer = () => {
  let params = useParams()
  const { Category } = useContext(ApiContext)

  let filterCategory
  if (Category) {
    filterCategory = Category.filter((ele) => ele.id === params.id)
  }

  return (
    <>
      {filterCategory
        ? filterCategory.map((res) => <NewsDetails noticia={res} key={res.id} />)
        : null}
    </>
  )
}

export default CategoryContainer
