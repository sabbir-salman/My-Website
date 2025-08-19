import React from "react";
import styles from "./MyProjects.module.css";

const projects = [
  {
    title: "DMTCL NFC System",
    description:
      "A streamlined app for seamless NFC pass scanning, trip tracking, and easy recharge management, enhanced with Google Material Design for a clean, intuitive experience.",
    image: "/images/dmtcl.png",
  },
  {
    title: "SquidX Design Agency",
    description:
      "A streamlined app for seamless NFC pass scanning, trip tracking, and easy recharge management, enhanced with Google Material Design for a clean, intuitive experience.",
    image: "/images/squidX.png",
  },
  {
    title: "AUST Buddy",
    description:
      "A streamlined app for seamless NFC pass scanning, trip tracking, and easy recharge management, enhanced with Google Material Design for a clean, intuitive experience.",
    image: "/images/austbuddy.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>
        View My <span>Projects</span>
      </h2>

      <div className={styles.timeline}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.moreBtn}>VIEW MORE PROJECTS →</button>
      </div>
    </section>
  );
};

export default ProjectsSection;
