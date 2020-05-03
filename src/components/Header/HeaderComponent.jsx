import React from 'react'
import './HeaderComponent.css'
import logo from '../../assets/logo.png';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="title-group">
                <img src={logo} />
                <div>
                    <h3>Название компании</h3>
                    <p>Самая клевая компания</p>
                </div>
            </div>

            <div className="contact-group">
                <a href="tel:+74998888888">+7(499)888-88-88</a>
                <a href="tel:+74997777777">+7(499)777-77-77</a>
                <a className="feedback">Обратная связь</a>
            </div>
        </header>
    )
}

export default HeaderComponent