import './Header.css';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    

return (
    <header>
        <div className='img-container'>
                <img src='./icon.png' alt='Reddit curator app' />
            </div>
        <div className='title-container'>
            <h1 className='title-logo'>Reddit minimal app</h1>
        </div>
        <form className='search' onSubmit={undefined}  >
            <input
            type='text'
            placeholder='search...'
            value=''
            onChange={undefined}
            aria-label="Search in Reddit posts"
            />
        </form>
    </header>
    );
};

export default Header;