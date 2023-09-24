import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.png";
import Slide from "./Slide";

const sliderData = [
  {
    image: banner3,
  },
  {
    image: banner1,
  },
  {
    image: banner2,
  },
];

const Slider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    dots: true,
  };
  return (
    <div className="px-2 lg:px-0 pt-2">
      <div className="lg:container mx-auto h-[250px] lg:h-[700px] rounded-sm overflow-hidden relative">
        <SlickSlider {...settings}>
          {sliderData.map((slide, i) => (
            <Slide key={i} slide={slide}></Slide>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default Slider;
