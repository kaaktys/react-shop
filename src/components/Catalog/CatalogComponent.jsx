import React from 'react'
import './CatalogComponent.scss'
import NavComponent from './Navbar/NavComponent'
import ContentComponent from './Content/ContentComponent'

const CatalogComponent = () => {
  return (
    <div className="catalog">
      <NavComponent />
      <ContentComponent />
    </div>
  )
}

export default CatalogComponent