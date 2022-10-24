import React from "react";
import styles from "./HeaderSocials.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className={styles["header__socials"]}>
      <a href='https://www.linkedin.com/in/arash-salami-68bb80106' target='__blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/ArashSalami' target='__blank'>
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
