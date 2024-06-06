import React from "react";
import { motion } from "framer-motion";
import skills from "./skillSet";

import styles from "./Skills.module.scss";

const Skills: React.FC = () => {
  return (
    <div className={styles.skills} id="skills">
      <h1 className={styles.heading}>PROFESSIONAL SKILLS</h1>
      <h3 className={styles.skillheading}>
        MY <span>Skills</span>
      </h3>
      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <div className={styles.skill} key={skill.name}>
            <h3 className={styles.skill__heading}>{skill.name}</h3>
            <p className={styles.skill__description}>{skill.description}</p>
            <div className={styles.skill__progress}>
              <div className={styles.bar}>
                <small className={styles.title}>
                  <span className={styles.number}>
                    {skill.percentage * 100}%
                  </span>
                </small>
                <motion.span
                  className={styles.barInner}
                  data-value="89"
                  data-percentage-value="89"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percentage * 100}%` }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                ></motion.span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
