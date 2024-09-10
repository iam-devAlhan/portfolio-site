import styles from "../sections/css/sectionOne.module.css";
import profilePhoto from "../../assets/IMG_20180628_191240.jpg";
const SectionOne = function() {
    return (
        <>
        <section className={styles.sectionOne}>
        <div className={styles.flexContainer}>
            <h1 className={styles.heading_01}>Hi! I am Alhaan Ahmed</h1>
            <h3 className={styles.heading_02}>Frontend Web Developer <i className="bi bi-code"></i></h3>
            <button className={styles.button}>Hire Me</button>
        </div> 
        <div className={styles.flexContainer2}>
            <img src={profilePhoto} width="400" height="400" className={styles.profileId}/>
        </div>
        </section> 
        </>
    )
}


export default SectionOne;