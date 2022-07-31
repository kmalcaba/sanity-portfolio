import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 },
        }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kirsten</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          opacity: { duration: 0.5 },
          delayChildren: { duration: 0.5 },
        }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_img" />
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            opacity: { duration: 0.5 },
            ease: "easeInOut",
          }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Header;
