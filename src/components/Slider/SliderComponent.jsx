import React, { Component } from 'react'
import './SliderComponent.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const photos = [
  {
    name: 'Photo 1',
    url: 'https://catalogue.accasoftware.com/img/Utenti/2460/lofra.HEADER.1200x200-0_1518426395.PNG'
  },
  {
    name: 'Photo 2',
    url: 'https://catalogue.accasoftware.com/img/Utenti/2769/merillat.HEADER.1200x200-0_1523344062.PNG'
  },
  {
    name: 'Photo 3',
    url: 'https://catalogue.accasoftware.com/img/Utenti/2039/ideal-standard.HEADER.1200x200-0_1511974598.PNG'
  },
]

class SliderComponent extends Component {
  render() {

    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: 'slides'
    }
    return (
      <div className="slider">
        <div className="slider-content">
          <Slider {...settings}>
            {photos.map((photo) => {
              return (
                <div>
                  <img src={photo.url} />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}

export default SliderComponent