import './Header.css';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { handleChangeValue } from '../../features/Posts/postsSlice';

const Header = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(handleChangeValue(value));
    };

    let timer;
    const handleChangeDebounce = (value) => {
        setSearch(value);
        clearTimeout(timer);
        timer = setTimeout(() => {
            handleChange(value);
        }, 500);
    };


    // function debounce(func, timeout = 300){
    //     let timer;
    //     return (...args) => {
    //       clearTimeout(timer);
    //       timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //     };
    //   }
    //   function saveInput(){
    //     console.log('Saving data');
    //   }
    //   const processChange = debounce(() => saveInput());
    
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
            value={search}
            onChange={(e) => handleChangeDebounce(e.target.value)}
            aria-label="Search in Reddit posts"
            />
        </form>
    </header>
    );
};

export default Header;