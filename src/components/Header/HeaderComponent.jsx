import React, { Component } from 'react'
import './HeaderComponent.css'
import logo from '../../assets/logo.png';

const HeaderComponent = () => {
    return (
        <div className="header">
            <img src={logo} />
            <h3>Название компании</h3>
            <p>самая клевая компания</p>
        </div>
    )
}

export default HeaderComponent