import React from "react";
import styles from "./HeaderSocials.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className={styles["header__socials"]}>
      <a href='https://linkedin.com' target='__blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com' target='__blank'>
        <FaGithub />
      </a>
      <a href='https://dribble.com' target='__blank'>
        <FaDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
