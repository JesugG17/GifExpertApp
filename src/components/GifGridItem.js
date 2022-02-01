import React from 'react';

const GifGridItem = ({ id, title , url, category }) => {
    
    return (
        <div className="img__container">
           <img className="img" src={ url } alt={ title }/>
           <p className="copy">{ title ? title : `${ category } GIF` }</p>
        </div> 
    );
};

export default GifGridItem;
