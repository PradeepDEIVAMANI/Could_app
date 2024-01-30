import React from 'react';
import './App.css';
// import images from './images'

const App = () => {
  return (
    <div className="app">
      <h1>Apple Store</h1>
      <div className="image-container">
        <img src="/1.jpg" alt="Image 1" />
        <img src="/2.jpg" alt="Image 2" />
        <img src="/3.jpg" alt="Image 3" />
        <img src="/4.jpg" alt="Image 4" />
      </div>
    </div>
  );
};

export default App;
