import React from "react";
import styles from "./About.module.css";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className={`container ${styles["about__container"]}`}>
        <div className={styles["about__me"]}>
          <div className={styles["about__me-image"]}>
            <img src={me} alt='Me' />
          </div>
        </div>
        <div className={styles["about__content"]}>
          <div className={styles["about__cards"]}>
            <article className={styles["about__card"]}>
              <FaAward className={styles["about-icon"]} />
              <h5>Experience</h5>
              <small>6 Months(Self-Tought)</small>
            </article>
            <article className={styles["about__card"]}>
              <FiUser className={styles["about-icon"]} />
              <h5>Clients</h5>
              <small>None!</small>
            </article>
            <article className={styles["about__card"]}>
              <VscFolderLibrary className={styles["about-icon"]} />
              <h5>Projects</h5>
              <small>20(Personal)</small>
            </article>
          </div>
          <p>
            I'm a 34 year old chemical engineering PhD student dropout who finally found the courage
            to leave his old life and follow his dreams. I was always fascinated by tech and IT but
            went on the wrong path for a long time, but I believe it is never too late to change and
            that's what I did! I'm a self-taught programmer who is a detail-oriented, organized and
            meticulous employee which works at fast pace to meet deadlines and an enthusiastic team
            player ready to contribute to company success.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
