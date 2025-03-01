import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//caculate the reverse index for staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; //number of step
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render & motion dive, each presenting a step pf the stairs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
