import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

import classes from "./Header.module.scss";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width > 1290) {
        setMenuOpen(false);
      }
    }
  }, [size.width]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <Link
          to="top"
          smooth={true}
          duration={500}
          className={classes.logo}
          offset={-100}
        >
          KTri
        </Link>
        <nav
          className={`${classes.nav} ${
            menuOpen && size.width && size.width < 1290
              ? classes.isMenu
              : classes.withoutMenu
          }`}
        >
          <ul>
            <li>
              <Link
                to="top"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
                offset={-100}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
                offset={-100}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass={classes.activeLink}
                onClick={menuToggleHandler}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose
              onClick={menuToggleHandler}
              className={classes.close}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
