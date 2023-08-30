// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb1.jpg`,
        },
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb2.jpg`,
        },
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb3.jpg`,
        },
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb4.jpg`,
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb4.jpg`,
        },
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb1.jpg`,
        },
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb2.jpg`,
        },
        {
          title: "title",
          path: `${process.env.NEW_PATH_IMG}/thumb3.jpg`,
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import swiper styles
import "swiper/swiper.min.css";
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
      observer={"true"} // ------> this solution
      onSwiper={(swiper) => {
        setTimeout(() => {
          swiper.update(); // ------> this solution
        }, 3000);
      }}
      centeredSlides={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] xl:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
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
