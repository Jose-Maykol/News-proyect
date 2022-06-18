import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiContext } from '../../context';
import NewsDetails from '../NewsDetail';

const NewsContainer = () => {

    let location = useLocation();

    const { Current, Category } = useContext(ApiContext);

    let filterCurrent = Current.filter(ele => `/detail/${ele.publishedAt}` === location.pathname);
    let filterCategory = Category.filter(ele => `/detail/${ele.publishedAt}` === location.pathname);

    console.log(filterCategory)

    return (
        <div>
            {filterCurrent ?
                filterCurrent.map(res =>
                    <NewsDetails noticia={res} />
                ) : null}
            {filterCategory ?
                filterCategory.map(res =>
                    <NewsDetails noticia={res} />
                ) : null}
        </div>
    )
}

export default NewsContainer;