import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

const variants = {
  enter: {
    x: 500,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 500,
    opacity: 0,
  },
};

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((isOpen) => !isOpen);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={toggleHandler} />

        <AnimatePresence initial={false}>
          {toggle && (
            <motion.div
              key="app__navbar-menu"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <HiX onClick={toggleHandler} />
              <ul>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={toggleHandler}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
export default Navbar;
