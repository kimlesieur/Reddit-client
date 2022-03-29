import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Posts from './features/Posts/Posts';


function App() {
  return (
    <div className="App">
            <Header/>
            <Subreddits/>
            <Posts/>
    </div>
  );
}

export default App;
