import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick";


const Carousel = () => {

    var settings = {
        dots: true,
        arrows  :false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2500,
      };

    return (
        <Slider className="slider" {...settings}>
      <div>
        <img src="src/assets/tech-companies.jpg" alt="" />
      </div>
      <div>
        <img src="src/assets/tech_neoncircuitboard_857021704_medium_lc5h05.jfif" alt="" />
      </div>
      <div>
        <img src="src/assets/three.jfif" alt="" />
      </div>
    </Slider>
      )
}

export default Carousel