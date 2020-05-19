import React from 'react'
import './NavComponent.scss'

const NavComponent = () => {
  return (
    <div className="nav">
      <nav>
        <ul className="outer-ul">
          <li><a>Автомобили</a></li>
          <li>
            <a href="" id="appliances">Бытовая техника</a>
            <ul className="inner-ul">
              <li><a href="" id="microwaves">Микроволновки</a></li>
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