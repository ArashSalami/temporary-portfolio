import React from "react";
import styles from "./CTA.module.css";
import cv from "../../assets/cv-me.pdf";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a href={cv} download className='btn'>
        Donwload CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
