import styles from "../sections/css/sectionOne.module.css";
const SectionOne = function() {
    return (
        <>
        <section className={styles.sectionOne}>
        <div className={styles.flexContainer}>
            <h1 className={styles.heading_01}>Hi! I am Alhaan Ahmed</h1>
            <h3 className={styles.heading_02}>Frontend Web Developer</h3>
            <button className={styles.button}>Hire Me</button>
        </div> 
        <div className={styles.flexContainer2}>

        </div>
        </section> 
        </>
    )
}


export default SectionOne;