import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';


export default class Carousel extends Component {
    render() {
        return (
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={45}
            totalSlides={1}
            className="mainCarousel"
          >
            <Slider>
              <Slide index={0}><Image hasMasterSpinner={true} src="./image/20190509stem.jpg"/></Slide>

            </Slider>

          </CarouselProvider>
        
        )
    }
}


{/* <div className="carousel_container">
<ButtonBack className="nav_btn"><img className="arrow-left" src="./image/arrow-down.svg"/></ButtonBack>
<ButtonNext className="nav_btn"><img className="arrow-right" src="./image/arrow-down.svg"/></ButtonNext>
</div> */}