import React from 'react'
import './FooterComponent.css'

const FooterComponent = () => {
    return (
        <div className="footer">
            <p className="footer-left">
                © 2012–2013 ЗАО «Компания»
                info@name.ru
            </p>
            <ul className="footer-center">
                <li>Главная</li>
                <li>Каталог</li>
                <li>Доставка и оплата</li>
                <li>Прайс-лист</li>
                <li>Контакты</li>
            </ul>
            <p className="footer-right">
                Разработка сайта —
                xin90210
            </p>
        </div>
    )
}

export default FooterComponent