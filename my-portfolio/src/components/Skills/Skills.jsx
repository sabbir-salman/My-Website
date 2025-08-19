import React from "react";
import styles from "./Skills.module.css";

const skills = [
  {
    title: "Landing Page Design",
    description:
      "Crafting visually appealing and user-friendly landing pages that capture attention and drive action. Focused on blending aesthetics with functionality to ensure seamless user engagement.",
  },
  {
    title: "SaaS Product Design",
    description:
      "Designing intuitive interfaces for SaaS platforms to optimize user workflows and enhance productivity. Prioritizing clarity and efficiency to meet diverse user needs in complex systems.",
  },
  {
    title: "Frontend Design",
    description:
      "Building responsive and visually cohesive web interfaces with a focus on usability and accessibility. Bridging design and functionality to deliver smooth, interactive user experiences.",
  },
  {
    title: "User Research",
    description:
      "Uncovering user behaviors, needs, and pain points through research methods. Translating insights into actionable improvements that resonate with audiences.",
  },
];

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>
        <span>Skills</span> Shaping My Design
      </h2>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
