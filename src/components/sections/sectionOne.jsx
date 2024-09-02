import styles from "../sections/css/sectionOne.module.css";
const SectionOne = function() {
    return (
        <>
        <section className={styles.sectionOne}>
            <h1 className={styles.heading_01}>Hi! I am Alhaan Ahmed</h1>
            <h3 className={styles.heading_02}>Frontend Web Developer</h3>
            <button className={styles.button}>Contact Me</button>
        </section> 
        </>
    )
}


export default SectionOne;