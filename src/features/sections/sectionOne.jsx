import styles from "../sections/css/sectionOne.module.css";
import profilePhoto from "../../assets/alhaan.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


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
            Full Stack AI Developer
          </h3>
        </div>
        <div className={styles.flexContainer2}>
          <img className={styles.profileId} src={profilePhoto}/>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
