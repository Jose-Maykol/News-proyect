import React from 'react';
import CategoryContainer from '../CategoryContainer';
import CurrentContainer from '../CurrentContainer';
import CurrentList from '../CurrentList';


const NewsDetailContainer = () => {

    return (
        <div className="container content-home">
            <div className='row'>
                <CurrentContainer />
                <CategoryContainer />
                <CurrentList />
            </div>
        </div>
    )
}

export default NewsDetailContainer;