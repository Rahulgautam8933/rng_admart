import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import homeimg1 from "../../assets/home1.jpeg";
import homeimg2 from "../../assets/home2.jpeg";
import homeimg3 from "../../assets/home3.jpg";
import homeimg4 from "../../assets/home4.jpeg";
import "./HomeMain.css";
import HomeMainCard from "./HomeMainCard";

const HomeMain = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: homeimg1,
      title: "Strategic Location",
      discription:
        "Situated on the route to Kashi and connected to Ayodhya Marg from Gangaganj Sultanpur Road, Sunrise Meadows offers unparalleled accessibility to major pilgrimage destinations and key transportation arteries.",
    },
    {
      image: homeimg2,
      title: "Proximity to Haidergarh International Airport",
      discription:
        "With the proposed Haidergarh International Airport just 22 kilometers away, residents of Sunrise Meadows enjoy the convenience of swift air travel, facilitating easy connectivity to domestic and international destinations",
    },
    {
      image: homeimg3,
      title: "Access to Purvanchal Expressway",
      discription:
        "The project is strategically located only 10 kilometers from the Purvanchal Expressway, ensuring seamless connectivity to major cities and economic hubs, thereby enhancing transportation convenience for residents and visitors alike.",
    },
    {
      image: homeimg4,
      title: "Close Proximity to Barabanki:",
      discription:
        " Positioned just 20 kilometers away from Barabanki, Sunrise Meadows offer residents the advantage of accessing urban amenities, educational institutions, healthcare facilities, and recreational venues within a short commute",
    },
  ];

  return (
    <div className="homeMain2">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="maincard">
        <HomeMainCard
          title={slides[currentSlide].title}
          discription={slides[currentSlide].discription}
        />
      </div>
    </div>
  );
};

export default HomeMain;
