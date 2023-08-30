// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons

// import requeried modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px]  sm:h-[340px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {slide.images.map((image, index) => {
                return (
                  <div key={index}>
                    <div>
                      <Image src={image.path} width={500} height={300} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
