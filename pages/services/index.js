// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36">
      <div className="h-full md:h-fit xl:h-full  flex items-center overflow-scroll xl:overflow-hidden   no-scrollbar">
        <div className="container mx-auto">
          <div className="flex  flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col xl:text-left items-center mb-4 xl:mb-0 ">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8  "
              >
                My Services <span className="text-emerald-400">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quo eius tenetur corporis, earum dolor reiciendis
                iste beatae? Porro, eum impedit sunt pariatur dolore accusantium
                numquam autem illum nisi quis. Sequi iste quasi, minus neque
                minima dicta. Harum aliquid quibusdam asperiores sapiente.
                Sapiente omnis aut veritatis in earum, tempore quae excepturi
                odio
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%] mx-auto"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Services;
