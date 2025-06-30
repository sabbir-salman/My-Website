import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import resume from "/images/resume.pdf";

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={`${styles.heroSectionName} container`}>
        <h1> I’m Sabbir Ahmed Salman </h1>
      </div>
      <div className={`${styles.heroSectionDescription} container`}>
        <p> UX/UI designer. I design for user — not for myself. </p>
      </div>

      <div className={styles.heroSectionButtonWrapper}>
        <a
          href={resume}
          download="Sabbir Ahmed Salman's Resume.pdf"
          className={styles.downloadLink}
        >
          <Button className={styles.heroSectionButton} size="large">
            DOWNLOAD RESUME <DownloadOutlined />
          </Button>
        </a>
      </div>
      

      {/* Scroll Button */}
      <div className={styles.scrollButton}>
        <svg className={styles.circularText} viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="#ccc" fontSize="14" letterSpacing="8.5" fontFamily="sans-serif">
            <textPath xlinkHref="#circlePath" startOffset="0%">
               SCROLL DOWN • SCROLL DOWN •  
            </textPath>
          </text>
        </svg>

        <div className={styles.scrollIcon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="#a678f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
