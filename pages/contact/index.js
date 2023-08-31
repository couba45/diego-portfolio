import ServiceSlider from "../../components/ServiceSlider";

// framer
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../../variants";

// icons
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center  justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]   ">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Let&lsquo;s <span className="text-emerald-400">Connect</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              action=""
              method="POST"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="name" className="input" />
                <input
                  type="email"
                  placeholder="email"
                  autocapitalize="off"
                  autocorrect="off"
                  className="input normal-case"
                />
              </div>
              <input type="text" placeholder="subject" className="input" />
              <textarea placeholder="message" className="textarea"></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex  items-center justify-center overflow-hidden hover:border-emerald-400 group"
              >
                <span className="group-hover:-translate-y-[120%]  group-hover:opacity-0 transition-all duration-500">
                  Let&lsquo;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0  group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
              </button>
            </motion.form>
          </div>
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

export default Contact;
