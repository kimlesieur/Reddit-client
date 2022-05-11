import './Header.css';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    

return (
    <header>
        <img src='./icon.png' alt='Reddit curator app' style={{height:"10vh", padding: "1vw 2vw"}} />
        <h1 className='titre-logo'>Reddit minimal app</h1>
        <form className='search' onSubmit={undefined}  >
            <input
            type='text'
            placeholder='search...'
            value=''
            onChange={undefined}
            aria-label="Search in Reddit posts"
            />
            <button type="submit" onClick={undefined} aria-label="search">
                Search in Reddit
            </button>
        </form>
    </header>
    );
};

export default Header;