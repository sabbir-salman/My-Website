import React from "react";
import styles from "./Events.module.css";

const events = [
  {
    title: "1st Place · Software Exhibition",
    subtitle: "Intra-University AUST CSE Carnival",
    link: "#",
  },
  {
    title: "Participant · UI/UX Contest",
    subtitle: "IUT National ICT Fest",
    link: "#",
  },
  {
    title: "Participant · UI/UX Contest",
    subtitle: "ITVERSE 2023 (Organized by DU IIT)",
    link: "#",
  },
];

const EventsSection = () => {
  return (
    <section className={styles.eventsSection}>
      <h2 className={styles.title}>
        Event <span>Attended</span>
      </h2>

      <div className={styles.eventsList}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <div className={styles.eventInfo}>
              <h3>{event.title}</h3>
              <p>{event.subtitle}</p>
            </div>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Project Link ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
