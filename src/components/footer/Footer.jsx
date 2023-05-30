/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@mui/material";
import { motion } from "framer-motion";
// import { CryptoState } from "../CryptoContext";
import styles from "../../styles";
import { footerVariants } from "../../utils/motion";
import "../../../src/components/navbar/navbar.css";
import "./footer.css";

const Footer = () => {
  // const { user } = CryptoState();
  return (
    <div className="footer2">
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.paddings} py-8 relative`}
      >
        <div className="footer-gradient" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10" />
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="roommie font-thin text-[24px] leading-[30px] text-white text-center footer ">
              <img src="/logo2.png" alt="logo" className="text-white w-[180px] h-[30px]"/>

              </div>{" "}
              <p className="font-normal text-[14px] text-white opacity-50">
                Copyright © 2023 - Ohad. All right reserved
              </p>
              <div>
               
                <Button>
                  <a
                    href="https://www.linkedin.com/in/ohadcohen90/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/linkedin.svg" width="27" height="20" />
                  </a>
                </Button>

                <Button className="btn">
                  <a
                    href="https://instagram.com/roommieofficial?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/instagram.svg" width="27" height="20" />
                  </a>
                </Button>

                <Button className="btn">
                  <a
                    href="https://www.facebook.com/RoommieOfficial/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/facebook.svg" width="27" height="20" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="views"></div>
      </motion.footer>
    </div>
  );
};

export default Footer;
