import React from "react";
import styles from "./WritingSpace.module.css";

const WritingSpace = () => {
  return (
    <section className={styles.section}>
      <div className={styles.curve}></div>

      {/* Row 1 */}
      <div className={styles.row1}>
        <h2 className={styles.verticalTitle}>
          <span className={styles.black}>WRITTING</span>{" "}
          <span className={styles.purple}>SPACE</span>
        </h2>

        {/* 555x600 card */}
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <img src="/images/blog1.png" alt="Watch" />
          <div className={styles.overlay}>
            <span className={styles.category}>TECH</span>
            <h3>How to prevent and protect your family from Carbon monoxide</h3>
          </div>
        </div>

        {/* 357x600 card */}
        <div className={`${styles.card} ${styles.cardMedium}`}>
          <img src="/images/blog1.png" alt="Laptop" />
          <div className={styles.overlay}>
            <span className={styles.category}>TECH</span>
            <h3>Majority of people will work in jobs that don’t exist today.</h3>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className={styles.row2}>
        <div className={`${styles.card} ${styles.cardSmall}`}>
          <img src="/images/blog1.png" alt="Hyperloop" />
          <div className={styles.overlay}>
            <span className={styles.category}>TECH</span>
            <h3>Hyperloop: A Unique Future of Speed</h3>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSmall}`}>
          <img src="/images/pinegap.jpg" alt="Pine Gap" />
          <div className={styles.overlay}>
            <span className={styles.category}>MYSTERY</span>
            <h3>Pine Gap: Where Access is Restricted</h3>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardSmall}`}>
          <img src="/images/henry.jpg" alt="Henry VIII" />
          <div className={styles.overlay}>
            <span className={styles.category}>HISTORY</span>
            <h3>King Henry VIII: The Worst King in English History</h3>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className={styles.buttonWrapper}>
        <button className={styles.moreBtn}>SHOW MORE →</button>
      </div>
    </section>
  );
};

export default WritingSpace;
