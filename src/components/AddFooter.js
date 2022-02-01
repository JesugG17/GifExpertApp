import React from 'react';
import gitHub from '../assets/icons/github-icon.svg';

const AddFooter = () => {
  return (
    <>
        <footer className='footer'>
            <h2 className='footer__title'>Redes Sociales</h2>
            <div className="footer__redes">
                {
                    <a key={'gitHub'}>
                        <img
                            className='redes__imgs'
                            src = { gitHub }
                            alt = { 'gitHub.svg'}
                        />

                    </a>
                }
            </div>
        </footer>
    
    </>
  );
};

export default AddFooter;
