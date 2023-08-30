// framer motion
import { motion } from "framer-motion";

// variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <>
      {/* <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        className="fixed bottom-0 top-0  right-full h-screen w-screen z-30 bg-gray-900"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
        1
      </motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        className="fixed bottom-0 top-0  right-full h-screen w-screen z-20 bg-gray-600"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      >
        1
      </motion.div>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        className="fixed bottom-0 top-0  right-full h-screen w-screen z-10 bg-emerald-400"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
        1
      </motion.div> */}
    </>
  );
};

export default Transition;
