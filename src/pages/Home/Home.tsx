import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.home} id="top">
      <div className={styles.content}>
        <p className={styles.greeting}>
          Hello, <span>my name is</span>
        </p>
        <p className={styles.name}>
          <span>Kristina</span> Tripak
        </p>
        <p className={styles.position}>
          I am a <span>Front-End Developer</span>
        </p>
        <p className={styles.about}>
          From Toronto, but originally from Ukraine. I have a deep passion in
          front end development. If you're hiring a junior front-end developer
          or need a website built, get in touch.
        </p>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/kristina-tripak">
            <CiLinkedin />
          </a>
          <a href="https://github.com/tinatripak">
            <FaGithub />
          </a>
        </div>
        <div className={styles.buttons}>
          <div>
            <a
              className={styles.buttons__download}
              href="/Kristina_Tripak_CV.pdf"
              download="Kristina_Tripak_CV.pdf"
            >
              Download CV
            </a>
          </div>

          <div>
            <a className={styles.buttons__skills} href="#skills">
              — My skills
            </a>
          </div>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src="kristina.jpg" alt="Kristina Tripak" />
      </div>
    </div>
  );
};

export default Home;
