import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ApiContext } from '../../context';
import NewsDetails from '../NewsDetail';



const CurrentContainer = () => {

    let location = useLocation();

    const { Current } = useContext(ApiContext);

    let filterCurrent = Current.filter(ele => `/detail/${ele.id}` === location.pathname);

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