import React from 'react';
import './App.scss';
import SliderComponent from './components/Slider/SliderComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import MenuComponent from './components/Menu/MenuComponent';
import CatalogComponent from './components/Catalog/CatalogComponent';
import FooterComponent from './components/Footer/FooterComponent';
import BreadcrumbsComponent from './components/Breadcrumbs/BreadcrumbsComponent';

function App() {
  return (
    <div className="wrapper">

      <HeaderComponent />

      <MenuComponent />

      <SliderComponent />

      <BreadcrumbsComponent />

      <CatalogComponent />

      <FooterComponent />

    </div>
  );
}

export default App;
