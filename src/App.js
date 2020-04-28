import React, { isValidElement } from 'react';
import './App.css';

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
          <div className="prev-btn">
            <button>prev</button>
          </div>
          <div className="next-btn">
            <button>next</button>
          </div>
          <div>
            <img src="https://ramki-vsem.ru/fon/raznocvetnyj-fon18.jpg" alt="" />
          </div>
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
        Content
      </div>
      <div className="footer">
        Footer
      </div>

    </div>
  );
}

export default App;
