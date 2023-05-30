import React from "react";
import {TypingText } from "../CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import styles from "../../styles";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "./contact.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const {t} = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      id="Contact"
    >
    
      <TypingText title={t("Contact Us")} textStyles="text-center" />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option"
           >
          
            <MdOutlineEmail className="contact__options-icon" />
            <h4 className="font-bold">Email</h4>
            <h5 className="text-neutral-700 email">ohadCo90@gmail.com</h5>
            <div className="interactive">
            <a
              href="mailto:ohadCo90@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="sendMessage"
            >
              {t("Send Email")}
            </a>
            </div>
          </article>
         
        
          <article className="contact__option">
          <RiMessengerLine className="contact__options-icon" />
          <h4 className="font-bold">Whatsapp</h4>
            <h5 className="text-neutral-700">050-909-8812</h5>
            <div className="interactive">
            <a
              href="https://api.whatsapp.com/send?phone=0509098812"
              target="_blank"
              rel="noreferrer"
              className="font-bold sendMessage"
            >
              {t("Send Message")}
            </a>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
      }    

export default Contact;
