import React from "react";
import { educationItems, experienceItems } from "./resumeSet";

import styles from "./Resume.module.scss";

const Resume: React.FC = () => {
  return (
    <div className={styles.resume} id="resume">
      <h1 className={styles.heading}>Resume</h1>
      <h3 className={styles.resumeheading}>
        MY <span>Story</span>
      </h3>
      <div className={styles.resumeGrid}>
        <div className={styles.education}>
          <h2 className={styles.gridheading}>Education</h2>
          {educationItems.map((item) => (
            <div className={`${styles.item} ${styles.edItem}`}>
              <h3>{item.name}</h3>
              <div className={styles.itemContent}>
                <div className={styles.nameDate}>
                  <h3 className={styles.major}>{item.subName}</h3>
                  <p className={styles.date}>{item.date}</p>
                </div>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.experience}>
          <h2 className={styles.gridheading}>Experience</h2>
          {experienceItems.map((item) => (
            <div className={`${styles.item} ${styles.expItem}`}>
              <h3>{item.name}</h3>
              <div className={styles.itemContent}>
                <div className={styles.nameDate}>
                  <h3 className={styles.major}>{item.subName}</h3>
                  <p className={styles.date}>{item.date}</p>
                </div>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
