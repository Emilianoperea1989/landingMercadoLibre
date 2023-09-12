import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,       
    autoplaySpeed: 5000,
  };

  const images = [
    'https://res.cloudinary.com/duqilis2i/image/upload/v1694480197/IMG%20Emiliano%20Perea/D_NQ_959032-MLA71412055836_092023-OO000_se5p4n.webp',
    'https://res.cloudinary.com/duqilis2i/image/upload/v1694480197/IMG%20Emiliano%20Perea/D_NQ_886264-MLA71387016212_082023-OO_lxvalm.webp',
    'https://res.cloudinary.com/duqilis2i/image/upload/v1694480197/IMG%20Emiliano%20Perea/D_NQ_953032-MLA71435997233_082023-OO_poawxu.webp',
    'https://res.cloudinary.com/duqilis2i/image/upload/v1694480196/IMG%20Emiliano%20Perea/D_NQ_894629-MLA71303166274_082023-OO_slhp0n.webp',
    'https://res.cloudinary.com/duqilis2i/image/upload/v1694480196/IMG%20Emiliano%20Perea/D_NQ_609104-MLA71410481099_082023-OO_wc8twg.webp',
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
