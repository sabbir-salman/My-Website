import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

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
        <Button className={styles.heroSectionButton} size="large">
          DOWNLOAD RESUME <DownloadOutlined />
        </Button>

      </div>
    </div>
  );
};

export default HeroSection;
