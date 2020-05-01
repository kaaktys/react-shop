import React from 'react'
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div className="menu">
            <menu>
                <div>
                    <a href="/Главная">Главная</a>
                </div>
                <div>
                    <a href="/Каталог">Каталог</a>
                </div>
                <div>
                    <a href="/Доставка и оплата">Доставка и оплата</a>
                </div>
                <div>
                    <a href="/Прайс-лист">Прайс-лист</a>
                </div>
                <div>
                    <a href="/Контакты">Недвижимость</a>
                </div>
            </menu>
        </div>
    )
}



export default MenuComponent