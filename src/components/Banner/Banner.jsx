import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/4d935ab9-beff-4a84-9838-4970a8b6ff48/sitio-web-oficial-de-nike.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{color:'#fff', fontSize:'5vh'}}>AIR FORCE 1 40 º ANIVERSARIO</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/4e5dddb0-0d66-4eb6-ac8f-0fa3f1385611/sitio-web-oficial-de-nike.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;