import React, { useState } from "react";
import { educationItems, experienceItems } from "./resumeSet";
import { motion } from "framer-motion";
import styles from "./Resume.module.scss";
import Collapsible from "../Projects/Collapsible";

const Resume: React.FC = () => {
  return (
    <div className={styles.resume} id="resume">
      <h1 className={styles.heading}>Resume</h1>
      <h3 className={styles.resumeheading}>
        MY <span>Story</span>
      </h3>
      <div className={styles.resumeGrid}>
        <motion.div
          className={styles.education}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className={styles.gridheading}>Education</h2>
          {educationItems.map((item, index) => (
            <div key={index} className={`${styles.item} ${styles.edItem}`}>
              <Collapsible title={item.name}>
                <div className={styles.itemContent}>
                  <div className={styles.nameDate}>
                    <h3 className={styles.major}>{item.subName}</h3>
                    <p className={styles.date}>{item.date}</p>
                  </div>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </Collapsible>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.experience}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 3 }}
        >
          <h2 className={styles.gridheading}>Experience</h2>
          {experienceItems.map((item, index) => (
            <div key={index} className={`${styles.item} ${styles.expItem}`}>
              <Collapsible title={item.name}>
                <div className={styles.itemContent}>
                  <div className={styles.nameDate}>
                    <h3 className={styles.major}>{item.subName}</h3>
                    <p className={styles.date}>{item.date}</p>
                  </div>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </Collapsible>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
