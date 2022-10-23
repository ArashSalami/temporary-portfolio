import React from "react";
import styles from "./Expertise.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='expertise'>
      <h5>What skills do i have</h5>
      <h2>my Expertise</h2>
      <div className={`container ${styles["experience__container"]}`}>
        <div className={styles["experience__frontend"]}>
          <h3>frontend development</h3>
          <div className={styles["experience__content"]}>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>HTML&CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>NextJS</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>
        <div className={styles["experience__backend"]}>
          <h3>backend development</h3>
          <div className={styles["experience__content"]}>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className={styles["experience__details"]}>
              <BsPatchCheckFill className={styles["experience__details-icon"]} />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
