import React, { useState } from 'react';
import AddCategory from './AddCategory';
import AddFooter from './AddFooter';
import GifGrid from './GifGrid';




const GifExpertApp = () => {
    const [ categories , setCategories ] = useState( [] );

    return (
        <>
            <h2 className="animate__animated animate__fadeIn animate__delay-0.5s">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>
            <ol>
                {
                
                  categories.map( category => (
                    
                    <GifGrid 
                        key      = { category }
                        category = { category }
                    />
                  ))
                }
            </ol>
        </>
        
    );
}


export default GifExpertApp;