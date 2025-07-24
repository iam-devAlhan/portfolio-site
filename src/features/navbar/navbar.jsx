import styles from "./navbar.module.css";
import { Link } from "react-scroll";
const Navbar = function () {
  return (
    <>
      <header>
        <nav>
          <div className={styles.container}>
            <ul>
              <Link to="about" smooth={true} duration={500}>
                <li className={styles["nav-link"]}>About</li>
              </Link>
              <Link to="portfolio" smooth={true} duration={500}>
                <li className={styles["nav-link"]}>Portfolio</li>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <li className={styles["nav-link"]}>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
