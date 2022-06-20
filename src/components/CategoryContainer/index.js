import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiContext } from '../../context';
import NewsDetails from '../NewsDetail';

const CategoryContainer = () => {

    let location = useLocation();

    const { Category } = useContext(ApiContext);

    let filterCategory
    if (Category) {
        filterCategory = Category.filter(ele => `/detail/${ele.id}` === location.pathname); // Si se rompe aca es !!
    }


    return (
        <div>
            {filterCategory ?
                filterCategory.map(res =>
                    <NewsDetails noticia={res} key={res.id} />
                ) : null}
        </div>
    )
}

export default CategoryContainer