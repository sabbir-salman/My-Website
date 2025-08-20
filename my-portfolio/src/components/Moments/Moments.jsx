import React from "react";
import styles from "./Moments.module.css";

const images = {
  topLeft:  "/images/blog1.png",
  topRight: "/images/blog1.png",
  midBig:   "/images/blog1.png",
  midTall1: "/images/blog1.png",
  midTall2: "/images/blog1.png",
  botLeft:  "/images/blog1.png",
  botMid:   "/images/blog1.png",
  botRight: "/images/blog1.png",
};

export default function Moments() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* row 1 — two wide banners */}
        <figure className={`${styles.card} ${styles.topLeft}`}>
          <img src={images.topLeft} alt="moment" />
        </figure>

        <figure className={`${styles.card} ${styles.topRight}`}>
          <img src={images.topRight} alt="moment" />
        </figure>

        {/* heading block, sits like the screenshot on the left */}
        <div className={styles.heading}>
          <h2>
            <span>Moments</span><br/>
            Through Frames.
          </h2>
        </div>

        {/* row 2 — big center + two skinny on the right */}
        <figure className={`${styles.card} ${styles.midBig}`}>
          <img src={images.midBig} alt="moment" />
        </figure>

        <figure className={`${styles.card} ${styles.midTall1}`}>
          <img src={images.midTall1} alt="moment" />
        </figure>

        <figure className={`${styles.card} ${styles.midTall2}`}>
          <img src={images.midTall2} alt="moment" />
        </figure>

        {/* bottom row — three medium tiles */}
        <figure className={`${styles.card} ${styles.botLeft}`}>
          <img src={images.botLeft} alt="moment" />
        </figure>

        <figure className={`${styles.card} ${styles.botMid}`}>
          <img src={images.botMid} alt="moment" />
        </figure>

        <figure className={`${styles.card} ${styles.botRight}`}>
          <img src={images.botRight} alt="moment" />
        </figure>
      </div>

      <div className={styles.ctaWrap}>
        <button className={styles.cta}>SEE MORE →</button>
      </div>
    </section>
  );
}
