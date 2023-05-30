import React from "react";
import { motion } from "framer-motion";
import './navLinks.css';

function NavLinks() {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className="ul">
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{delay:0.10}}
        className="li"
      >
        <a className="a" href="/about">About Me</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{delay:0.20}}
        className="li"
      >
        <a className="a" href="/contact">Contact</a>
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{delay:0.40}}
        className="li"
      >
        <a className="a" href="/test">Test</a>
      </motion.li>
    </ul>
  );
}

export default NavLinks;
