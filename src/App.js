import React from 'react';
import './App.css';
import SliderComponent from './components/Slider/SliderComponent';
import NavComponent from './components/Navbar/NavComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import MenuComponent from './components/Menu/MenuComponent';
import ContentComponent from './components/Content/ContentComponent';
import FooterComponent from './components/Footer/FooterComponent';
import BreadcrumbsComponent from './components/Breadcrumbs/BreadcrumbsComponent';

function App() {
  return (
    <div className="wrapper">

      <HeaderComponent />

      <MenuComponent />

      <SliderComponent />

      <BreadcrumbsComponent />

      <NavComponent />

      <ContentComponent />

      <FooterComponent />

    </div>
  );
}

export default App;
