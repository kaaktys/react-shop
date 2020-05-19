import React from 'react'
import './BreadcrumbsComponent.scss'

const BreadcrumbsComponent = () => {
  return (
    <div className="breadcrumbs">
      <nav>
        <a href="" id="home">Главная</a>/
        <a href="" id="catalog">Каталог</a>/
        <a href="">Бытовая техника</a>
      </nav>
    </div>
  )
}

export default BreadcrumbsComponent