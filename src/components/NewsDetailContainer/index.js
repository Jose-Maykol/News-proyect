import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiContext } from '../../context';
import NewsDetails from '../NewsDetail';

const NewsContainer = () => {

    let location = useLocation();

    const { Current, Category } = useContext(ApiContext);

    let filterCurrent = Current.filter(ele => `/detail/${ele.publishedAt}` === location.pathname);
    let filterCategory = Category.filter(ele => `/detail/${ele.publishedAt}` === location.pathname);


    return (
        <div>
            {filterCurrent.map(res =>
                <NewsDetails noticia={res} />
            )}
            {filterCategory.map(res =>
                <NewsDetails noticia={res} />
            )}
        </div>
    )
}

export default NewsContainer;