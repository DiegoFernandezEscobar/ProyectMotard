import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Img/home1.jpg"
          alt="First slide"
        />
      <Carousel.Caption className='tituloCarrucel'>
        <h3 className='txtCOlor'>Vendemos adrenalina</h3>
          <p className='txtCOlor'>La mejor forma de sentirse vivo es cuando las vibraciones del motor, el viento y el sonido a 18mil rpm nos lo recuerdan.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Img/home2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='tituloCarrucel'>
        <h3 className='txtCOlor'>Cualquier terreno es mejor en dos ruedas</h3>
          <p className='txtCOlor'>¿Que más lindo que saltar medanos en la playa?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Img/home3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='tituloCarrucel'>
        <h3 className='txtCOlor'>Accesorios para la aventura</h3>
          <p className='txtCOlor'>Tenemos todo para que no rayes tu moto cuando elijas manejar con una sola rueda.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;