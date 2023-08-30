import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          // eslint-disable-next-line react/jsx-key
          <FaHtml5 />,
          // eslint-disable-next-line react/jsx-key
          <FaCss3 />,
          // eslint-disable-next-line react/jsx-key
          <FaJs />,
          // eslint-disable-next-line react/jsx-key
          <FaReact />,
          // eslint-disable-next-line react/jsx-key
          <SiNextdotjs />,
          // eslint-disable-next-line react/jsx-key
          <SiFramer />,
          // eslint-disable-next-line react/jsx-key
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          // eslint-disable-next-line react/jsx-key
          <FaFigma />,
          // eslint-disable-next-line react/jsx-key
          <SiAdobexd />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer",
        stage: "2022 - 2023",
      },
      {
        title: "Web Developer - Camosun College",
        stage: "2022 - 2023",
      },
      {
        title: "Game Development - Broken Protocols",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "ICS diploma - Camosun College",
        stage: "2022 - 2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counters
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="h-full bg-primary/30 py-36">
        <div className="h-full  bg-primary/30  py-32 text-center xl-text-left ">
          {/* avatar image */}
          {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[200px]"
      >
        <Avatar />
      </motion.div> */}
          <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
            {/* text  */}
            <div className="flex-1 flex flex-col justify-center xl:text-left">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 "
              >
                Elevating <span className="text-emerald-400">Ideas </span> with
                Innovation
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2  xl:px-0"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ipsa, explicabo placeat officiis quod quae! Alias, ad, ipsam
                velit excepturi numquam cum maiores officia nesciunt vel ea
                autem ab veritatis. Est illum beatae fugiat consequuntur
                asperiores autem deserunt officiis accusantium, nemo eius unde
                placeat laboriosam tempore consectetur hic dolore dolor porro
                molestias. Vero ipsam quo eius quaerat odio. Aliquid, corrupti?
              </motion.p>
              {/* counter */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto mb-8"
              >
                <div className="flex flex-1 xl:gap-x-6 ">
                  {/* experience */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/40 after:absolute after:top-0 after:right-0 ">
                    <div className="text-2xl xl:text-4xl font-extrabold text-emerald-400 mb-2">
                      <CountUp start={0} end={19} duration={5} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                      Years Old
                    </div>
                  </div>

                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/40 after:absolute after:top-0 after:right-0 ">
                    <div className="text-2xl xl:text-4xl font-extrabold text-emerald-400 mb-2">
                      <CountUp start={0} end={3} duration={5} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                      Satisfied Clients
                    </div>
                  </div>

                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/40 after:absolute after:top-0 after:right-0 ">
                    <div className="text-2xl xl:text-4xl font-extrabold text-emerald-400 mb-2">
                      <CountUp start={0} end={10} duration={5} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[200px]">
                      Finished Projects
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* info */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
            >
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {aboutData.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className={`${
                        index === itemIndex &&
                        "text-emerald-300 after:w-[100%] after:bg-emerald-300 after:transition-all after:duration-300 "
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}
                    </div>
                  );
                })}
              </div>
              <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start">
                {aboutData[index].info.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2  items-center text-white/60 "
                    >
                      {/* tittle */}
                      <div className="font-light mb-2 md:mb-0  ">
                        {item.title}
                      </div>
                      <div className="hidden md:flex md:items-start">-</div>
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4">
                        {/* icons */}
                        {item.icons?.map((icon, itemIndex) => {
                          return (
                            <div
                              key={itemIndex}
                              className="text-2xl transition-all duration-500 text-white "
                            >
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="hidden xl:block">
                <div className="flex items-start my-5">
                  <h3 className="h3">Music I Currently Listen To:</h3>
                </div>
                <iframe
                  src="https://open.spotify.com/embed/playlist/7BWuZ74WtcVOHFsXiHB6KN?utm_source=generator"
                  width="70%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
        {/* slider */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full hidden xl:max-w-[65%] mx-auto"
        >
          <ServiceSlider />
        </motion.div>
      </div>
    </>
  );
};

export default About;
