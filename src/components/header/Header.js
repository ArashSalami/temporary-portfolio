import React from "react";
import styles from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className={`${styles["header__container"]} container`}>
        <h5>Hello I'm</h5>
        <h1>Arash Salami</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <img src={ME} alt='Arash Salami' />
        </div>
        <a href='#contact' className={styles["scroll__down"]}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
