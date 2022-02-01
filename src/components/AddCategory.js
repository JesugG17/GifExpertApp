import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {
    
    const [ inputValue, setInputValue ] = useState('');
    
    const handleInputChange = ( event ) => {
        setInputValue( event.target.value );
    } 

    const handleSubmit = ( event ) => {
        event.preventDefault();
    
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
    }
   
    
    return ( 
        <form onSubmit={ handleSubmit }>
            <input
                type        = "text"
                value       = { inputValue }
                onChange    = { handleInputChange }
                placeholder = 'Inserta una nueva categoria'
                className='animate__animated animate__fadeInRight'
                />
        </form> 
        
        );
    };
    
    AddCategory.propTypes = {
        setCategories: PropTypes.func.isRequired,
    };
    
    
    export default AddCategory;
    