import React from 'react';
import './App.css';
import SliderComponent from './components/Slider/SliderComponent';
import NavComponent from './components/Navbar/NavComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import MenuComponent from './components/Menu/MenuComponent';
import ContentComponent from './components/Content/ContentComponent';
import FooterComponent from './components/Footer/FooterComponent';

function App() {
  return (
    <div className="wrapper">

      <HeaderComponent />

      <MenuComponent />

      <SliderComponent />

      <NavComponent />

      <ContentComponent />

      <FooterComponent />

    </div>
  );
}

export default App;
