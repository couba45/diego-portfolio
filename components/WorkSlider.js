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
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#34d399] to-[#14532d] opacity-0  group-hover:opacity-80 transition-all duration-700 "></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className=" flex items-center gap-x-2  text-[13px] tracking-[0.2em]">
                          {/* title 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150  ">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%]  group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
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
