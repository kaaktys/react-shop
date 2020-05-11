import React, { Component } from 'react'
import './SliderComponent.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const photos = [
  {
    name: 'Photo 1',
    url: 'https://picsum.photos/1250/400?random=1'
  },
  {
    name: 'Photo 2',
    url: 'https://picsum.photos/1250/400?random=2'
  },
  {
    name: 'Photo 3',  
    url: 'https://picsum.photos/1250/400?random=3'
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