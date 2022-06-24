import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import NewsDetails from '../NewsDetail';

const FeatureContainer = () => {

    let location = useLocation();

    const { Feature } = useContext(ApiContext);

    let filterFeature = Feature.filter(ele => `/detail/${ele.id}` === location.pathname);

    return (
        <>
            {filterFeature ?
                filterFeature.map(res =>
                    <NewsDetails noticia={res} key={res.id} />
                ) : null}
        </>
    )
}

export default FeatureContainer