import React from "react";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={`${styles.heroSectionName} container`}>
        <h1> I’m Sabbir Ahmed salman </h1>
      </div>
      <div className={`${styles.heroSectionDescription} container`}>
        <p> UX/UI designer. I design for user — not for myself. </p>
      </div>
      <div className={`${styles.heroSectionButton} container`}>
        <button className={styles.buttonPrimary}>Download CV</button>
      </div>


    </div>
  );
};

export default HeroSection;
