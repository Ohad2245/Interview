/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import AuthModal from '../../components/Authentication/AuthModal';
import { CryptoState } from "../../CryptoContext";
import UserSideBar from "../Authentication/UserSideBar";

function Navbar() {
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const { t } = useTranslation();

  const {user} = CryptoState();
  return (
    <div className="navbar_container">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-2 relative`}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className={`${styles.innerWidth} mx-auto justify-between gap-8`}>
          <Box className="w-[24px] h-[24px] object-contain"></Box>
          <a href="#">
            <div className="roommie font-thin text-[24px] leading-[30px] text-white">
            <img src="/logo2.png" alt="logo" className="text-white w-[180px] h-[30px]"/>

            
              <FormControl className="language">
                <InputLabel className="text-white">{t("Language")}</InputLabel>
                {/* <Select
                  style={{ width: 100, height: 40 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={(e) => handleClick(e.target.value)}
                  label="Language"
                  className="text-white"
                >
                  <MenuItem value={"en"}> <img src="https://flagcdn.com/us.svg" width="35" alt=''/>  </MenuItem>
                  <MenuItem value={"he"}> <img src="https://flagcdn.com/il.svg" width="35" alt='Israel'/> </MenuItem>
               </Select> */}

              </FormControl>
              {user ? <UserSideBar/> : <AuthModal/>}

            </div>
           
          </a>
        </div>
        <div>

        </div>
      </motion.nav>

      <div>
        <nav className="text-white gap-10 text-center items-start">
          <a href="#Mission">{t("Mission")}</a>
          <a href="#Testimonials">{t("Who We Are")}</a>
          <a href="#Why">{t("Why")}</a>
          <a href="#Values">{t("Values")}</a>
          <a href="#Contact">{t("Contact Us")} </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
