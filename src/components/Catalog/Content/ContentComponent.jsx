import React from 'react'
import './ContentComponent.scss'
import catalogItem from '../../../assets/catalogItem.PNG'

const ContentComponent = () => {
  return (
    <div className="content">
      <ul>
        <li><img src={catalogItem} alt="" /></li>
        <li><img src={catalogItem} alt="" /></li>
        <li><img src={catalogItem} alt="" /></li>
        <li><img src={catalogItem} alt="" /></li>
        <li><img src={catalogItem} alt="" /></li>
      </ul>

      <hr />
      <p>
        Компания «Пиксель Плюс» существует более 6 лет, за это время мы принимали участие в разработке более чем 700 сайтов,
        поэтому можем уверенно называть себя профессионалами.
        На данный момент наш коллектив состоит из более чем 30 сотрудников работающих в двух офисах в Москве и Зеленограде.
        Характерные для этого жанра мотивы: неразделённой любви, ухода молодости, угасания души.
      </p>
      <p>
        Одним из основных направлений работ нашей компании является поисковое продвижение сайтов,
        на данной момент мы работаем с более чем 150 постоянными клиентами по более чем 11 000 поисковым запросам.
        При этом в работе основной акцент мы делаем на качестве работ,
        а так же применяем собственные уникальные разработки в области SEO продвижения.
        На данный момент отдел SEO состоит из 9 человек под руководством ведущего специалиста,
        преимущественно работающих в нашем московском офисе.
      </p>
    </div>
  )
}

export default ContentComponent