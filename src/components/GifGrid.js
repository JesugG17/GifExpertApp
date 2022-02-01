import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>  
            { loading && <p className='loading'>Loading...</p> }
            <div className="gifs__container animate__animated animate__fadeInLeft" >
                {
                    images.map( image  =>  {
                    
                    return <GifGridItem
                        key = { image.id } 
                              { ...image } 
                        
                        />
                    })
                }
            </div>
        </>
    );
};




export default GifGrid;
