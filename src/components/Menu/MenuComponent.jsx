import React from 'react'
import './MenuComponent.scss'

const MenuComponent = () => {
    return (
        <div className="menu">
            <div className="menu-content">
                <nav>
                    <ul>
                        <li><a href="/Главная">Главная</a></li>
                        <li><a href="/Каталог">Каталог</a></li>
                        <li><a href="/Доставка и оплата">Доставка и оплата</a></li>
                        <li><a href="/Прайс-лист">Прайс-лист</a></li>
                        <li><a href="/Контакты">Недвижимость</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}



export default MenuComponent