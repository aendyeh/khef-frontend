import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className='start-page-container'>
        <div className='logo-container'>
          <img src='assets/img/khef-logo.png' alt='Khef logo' />
        </div>
        <div className='actions-container'>
          <div className='search-container'>
            <input type='text' />
            <button type='submit'>Find</button>
          </div>
          <hr/>
          <div className='browse-container'>
            <span>or <span>browse</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
