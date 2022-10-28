import './Header.css';
import React, {useState} from 'react';
import { useAppDispatch } from '../../app/hooks';
import { handleSearch } from '../../features/Posts/postsSlice';

const Header = () => {

    const [search, setSearch] = useState('');
    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        dispatch(handleSearch(value));
    };

    let timer:NodeJS.Timeout;
    const handleChangeDebounce = (value: string) => {
        setSearch(value);
        clearTimeout(timer);
        timer = setTimeout(() => {
            handleChange(value);
        }, 500);
    };
    
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeDebounce(e.target.value)}
            aria-label="Search in Reddit posts"
            />
        </form>
    </header>
    );
};

export default Header;