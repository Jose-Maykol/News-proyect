import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import NewsDetails from '../NewsDetail';

const CurrentContainer = () => {

    let params = useParams();

    const { Current } = useContext(ApiContext);

    let filterCurrent = Current.filter(ele => ele.id === params.id);

    return (
        <>
            {filterCurrent ?
                filterCurrent.map(res =>
                    <NewsDetails noticia={res} key={res.id} />
                ) : null}
        </>
    )
}

export default CurrentContainer