import React from "react";
import styles from "./Skills.module.css";
import { BiCheck } from "react-icons/bi";

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Additional info</h5>
      <h2>Details</h2>
      <div className={`container ${styles["services__container"]}`}>
        <article className={styles.service}>
          <div className={styles["service__head"]}>
            <h3>reactJS</h3>
          </div>
          <ul className={styles["service__list"]}>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Context API</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>React-Redux</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Styled Components</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>React Router DOM</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Axios</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles["service__head"]}>
            <h3>Backend development</h3>
          </div>
          <ul className={styles["service__list"]}>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Some Experience With NodeJS</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Some Experience With Express</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Some Experience With MongoDB</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles["service__head"]}>
            <h3>Personal Traits </h3>
          </div>
          <ul className={styles["service__list"]}>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Team Work</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Honesty and Integrity</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Problem-Solving Abilities and Creativity</p>
            </li>
            <li>
              <BiCheck className={styles["service__list-icon"]} />
              <p>Willingness To Learn</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;
