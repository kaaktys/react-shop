import React from 'react'
import './NavComponent.css'

const NavComponent = () => {
  return (
    <div className="nav">
      <nav>
        <ul type="none">
          <li><a href="">Автомобили</a></li>
          <li>
            <a href="">Бытовая техника</a>
            <ul type="disc">
              <li><a href="">Микроволновки</a></li>
              <li><a href="">Холодильники</a></li>
              <li><a href="">Посудомойки</a></li>
              <li><a href="">Чайники</a></li>
            </ul>
          </li>
          <li><a href="">Мобильная техника</a></li>
          <li><a href="">Компьютеры</a></li>
          <li><a href="">Одежда</a></li>
          <li><a href="">Недвижимость</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavComponent