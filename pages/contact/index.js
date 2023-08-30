import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <>
      <div>Contact</div>

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
