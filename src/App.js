import React from 'react';
import './App.css';
import SliderComponent from './components/Slider-Component/SliderComponent';
import NavComponent from './components/Nav-Component/NavComponent';
import HeaderComponent from './components/Header-Component/HeaderComponent';
import MenuComponent from './components/Menu-Component/MenuComponent';

function App() {
  return (
    <div className="wrapper">

      <div className="header">
        <HeaderComponent />
      </div>

      <div className="menu">
        <MenuComponent />
      </div>

      <div className="slider">
        <SliderComponent /> 
      </div>

      <div className="nav">
         <NavComponent />
      </div>

      <div className="content">
        <div> leftblock </div>
        Content
        <div> centerblock </div>
      </div>

      <div className="footer">
        Footer
      </div>

    </div>
  );
}

export default App;
