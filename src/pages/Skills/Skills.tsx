import React from "react";
import { motion } from "framer-motion";
import skills from "./skillSet";

import styles from "./Skills.module.scss";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <motion.div
      className={styles.skills}
      id="skills"
      initial="hidden"
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className={styles.heading}>PROFESSIONAL SKILLS</h1>
      <h3 className={styles.skillheading}>
        MY <span>Skills</span>
      </h3>
      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <motion.div
            className={styles.skill}
            key={skill.name}
            variants={skillVariants}
          >
            <h3 className={styles.skill__heading}>{skill.name}</h3>
            <p className={styles.skill__description}>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
