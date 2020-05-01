import React, { Component } from 'react'
import './NavComponent.css'

const NavComponent = () => {
  return (
    <div className="nav">
      <nav>
        <div>
          <a href="/Бытовая техника">Бытовая техника</a>
        </div>
        <div>
          <a href="/Мобильная техника">Мобильная техника</a>
        </div>
        <div>
          <a href="/Компьютеры">Компьютеры</a>
        </div>
        <div>
          <a href="/Одежда">Одежда</a>
        </div>
        <div>
          <a href="/Недвижимость">Недвижимость</a>
        </div>
      </nav>
    </div>
  )
}

export default NavComponent