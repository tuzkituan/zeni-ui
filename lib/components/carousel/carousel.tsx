import Slider, { Settings } from "react-slick";
import { ICarousel } from "./carousel.types";

const Carousel = ({ items, ...props }: ICarousel & Settings) => {
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    initialSlide: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    lazyLoad: "ondemand",
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings} {...props}>
      {(items || []).map((x, i) => (
        <div key={i}>{x}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
