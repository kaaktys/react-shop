import React from 'react';
import './App.css';
import SliderComponent from './components/Slider-component/SliderComponent';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        Header
      </div>

      <div className="menu">
        <a href="">Главная</a>
        <a href="">Каталог</a>
        <a href="">Доставка и оплата</a>
        <a href="">Прайс-лист</a>
        <a href="">Контакты</a>
      </div>

      <div className="slider">
        <SliderComponent /> 
      </div>

      <div className="nav"> Навбар
          <ul>
          <li><a href="Бытовая техника">Бытовая техника</a></li>
          <li><a href="Мобильная техника">Мобильная техника</a></li>
          <li><a href="Компьютеры">Компьютеры</a></li>
          <li><a href="Одежда">Одежда</a></li>
          <li><a href="Недвижимость">Недвижимость</a></li>
        </ul>
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
