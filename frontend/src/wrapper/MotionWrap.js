import { motion } from "framer-motion";

function MotionWrap(Component, classNames) {
  return function HOC() {
    return (
      <motion.div
        whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };
}
export default MotionWrap;
