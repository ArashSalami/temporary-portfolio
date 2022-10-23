import React from "react";
import styles from "./Portfolio.module.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Job Hunt Dashboard",
    githubUrl: "https://github.com/ArashSalami/temporary-jobster",
    demoUrl: "https://job-hunt-dashboard.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Furniture House",
    githubUrl: "https://github.com/ArashSalami/temporary-furniture-house",
    demoUrl: "https://furniture-house-shop.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div className={`container ${styles["portfolio__container"]}`}>
        {data.map((item) => {
          const { id, title, githubUrl, demoUrl, image } = item;
          return (
            <article key={id} className={styles["portfolio__item"]}>
              <div className={styles["portfolio__item-image"]}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className={styles["portfolio__item-cta"]}>
                <a href={githubUrl} className='btn' target='_blank' rel='noreferrer'>
                  Github
                </a>
                <a href={demoUrl} className='btn btn-primary' target='_blank' rel='noreferrer'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
