import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import NewsDetails from '../NewsDetail';

const FeatureContainer = () => {

    let params = useParams()
    const { Feature } = useContext(ApiContext);

    let filterFeature = Feature.filter(ele => ele.id === params.id);

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