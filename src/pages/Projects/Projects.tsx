import React from "react";
import { motion } from "framer-motion";
import projects from "./projectSet";
import { GoArrowRight } from "react-icons/go";
import styles from "./Projects.module.scss";

const Projects: React.FC = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.projects} id="projects">
      <h1 className={styles.heading}>Portfolio</h1>
      <h3 className={styles.projectheading}>
        MY <span>Projects</span>
      </h3>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.project}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.image}>
              <img src={project.imageSrc} alt={project.name} />
            </div>
            <h3 className={styles.project__name}>{project.name}</h3>
            <p className={styles.project__description}>{project.description}</p>
            <div className={styles.project__buttons}>
              <a className={styles.demo} href={project.demoUrl}>
                See the project <GoArrowRight size={30} color="#442c25" />
              </a>
              <a className={styles.code} href={project.codeUrl}>
                View a source code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
