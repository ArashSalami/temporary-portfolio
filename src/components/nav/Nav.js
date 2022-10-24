import React, { useState } from "react";
import styles from "./Nav.module.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const setActiveLink = (e) => {
    const href = e.currentTarget.getAttribute("href");
    setActiveNav(href);
  };
  return (
    <nav>
      <ul>
        <li>
          <a href='#' className={activeNav === "#" ? styles.active : ""} onClick={setActiveLink}>
            <AiOutlineHome className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href='#about'
            onClick={setActiveLink}
            className={activeNav === "#about" ? styles.active : ""}
          >
            <AiOutlineUser className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href='#expertise'
            onClick={setActiveLink}
            className={activeNav === "#expertise" ? styles.active : ""}
          >
            <BiBook className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href='#additional'
            onClick={setActiveLink}
            className={activeNav === "#additional" ? styles.active : ""}
          >
            <RiServiceLine className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href='#portfolio'
            onClick={setActiveLink}
            className={activeNav === "#portfolio" ? styles.active : ""}
          >
            <AiOutlineFundProjectionScreen className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href='#contact'
            onClick={setActiveLink}
            className={activeNav === "#contact" ? styles.active : ""}
          >
            <BiMessageSquareDetail className={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
