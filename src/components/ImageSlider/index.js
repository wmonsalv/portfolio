import Carousel from 'react-bootstrap/Carousel';
import html from '/Users/william_x1/portfolio/src/assets/images/html512.png'
import js from "/Users/william_x1/portfolio/src/assets/images/logo3.png"
import css from "/Users/william_x1/portfolio/src/assets/images/logo2.png"
import react from "/Users/william_x1/portfolio/src/assets/images/reactimage.png"

function CarouselFade() {
  return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={html}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={css}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={js}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={react}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}

export default CarouselFade;