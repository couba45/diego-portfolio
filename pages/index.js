// Image
import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

import ServiceSlider from "../components/ServiceSlider";

const Home = () => {
  return (
    <>
      <div className="bg-primary/60 h-full">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* tittle */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Welcome to My <br />{" "}
              <span className="text-emerald-400">Digital Playground</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              ducimus aperiam recusandae eos, quaerat modi quis, quibusdam ea
              vero sint dolorum illum labore voluptatem reprehenderit porro in
              ullam cum praesentium!
            </motion.p>
            {/* button */}
            <div className="flex justify-center xl:hidden relative z-20">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex z-20"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image - delete in the future if possible*/}
        <div className="w-[1200px] absolute h-full right-0 bottom-0">
          {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0 ">
          image
        </div> */}
          {/* particles */}
          <ParticlesContainer />
          {/* avatar image */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] absolute max-h-[678px] -bottom-32 lg:right-[5%] lg:bottom-60 "
          >
            <Avatar />
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
    </>
  );
};

export default Home;
