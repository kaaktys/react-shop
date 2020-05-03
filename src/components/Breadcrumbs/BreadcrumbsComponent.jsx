import React from 'react'
import './BreadcrumbsComponent.css'

const BreadcrumbsComponent = () => {
  return (
    <div className="breadcrumbs">
      <nav>
        <a href="">Главная</a> /
        <a href="">Каталог</a> /
        <a href="">Бытовая техника</a>
      </nav>
    </div>
  )
}

export default BreadcrumbsComponent