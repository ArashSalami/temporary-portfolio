import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <a href='#' className={styles["footer__logo"]}>
        Arash Salami
      </a>
      <ul className={styles["permalinks"]}>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#expertise'>Expertise</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>

        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className={styles["footer__copyright"]}>
        <small>&copy; Arash Salami. All Rights Reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
