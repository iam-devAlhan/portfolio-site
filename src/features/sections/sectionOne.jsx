import styles from "../sections/css/sectionOne.module.css";
import profilePhoto from "../../assets/alhaan.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";
const SectionOne = function () {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <section className={styles.sectionOne}>
        <div
          className={styles.flexContainer}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className={styles.heading_01}>Hi! I am Alhaan Ahmed</h1>
          <h3 className={styles.heading_02}>
            Full Stack Python Developer <i className="bi bi-code"></i>
          </h3>
          <Link to="portfolio" smooth={true} duration={500}>
            <button className={styles.button}>Show my Work</button>
          </Link>
        </div>
        <div className={styles.flexContainer2}>
          <img
            src={profilePhoto}
            width="400"
            height="400"
            className={styles.profileId}
          />
        </div>
      </section>
    </>
  );
};

export default SectionOne;
