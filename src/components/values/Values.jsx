/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./values.css";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import styles from "../../styles";
import {TypingText } from "../CustomTexts";
import { useTranslation } from "react-i18next";

function Values() {
  
  
  const {t} = useTranslation();
  
  return (
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      id="Values2"
    >
    
      <TypingText title={t("Values")} textStyles="text-center" />
    <div className="container" id="Values">
      <div className="box">
        <span></span>
        <div
          className="content"
          data-hover={t("Our team is composed of individuals whose actions match their words.")}
        >
          <h2 className="card1">{t("Accountability")}</h2>
        </div>
      </div>

      <div className="box">
        <span></span>
        <div
          className="content"
          data-hover={t("We aim to assess scenarios from multiple angles and encourage playing devil's advocate - this makes us more sure of the actions we take.")}
        >
          <h2 className="card1">{t("Critical thinking")}</h2>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div
          className="content"
          data-hover={t("We use open conversation to promote a culture of growth and communication, allowing us to be more intentional about our decisions and actions.")}
        >
          <h2 className="card1">{t("Transparency")}</h2>
        </div>
      </div>
      
    </div>
    
    </motion.div>
    
  );
}

export default Values;
