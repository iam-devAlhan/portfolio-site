import styles from "../sections/css/portfolioSection.module.css";

const SectionThree = function () {
    return (
        <>
            <section className={styles.container}>
                <h1 className={styles.mainHeading}>Portfolio / Projects</h1>
                <div className={styles.container2}>
                    <div id={styles.projectContainer}>
                        <h3>Chat App</h3>
                        <p>A simple realtime chat app made using react and firebase</p>
                        <button className={styles.button}>Live Demo</button>
                        <button className={styles.button}>Source Code</button>
                    </div>
                    <div className={styles.image}>Image placeholder</div>
                </div>
                
                <div className={styles.container2}>
                    <div id={styles.projectContainer}>
                        <h3>Quizlify</h3>
                        <p>Online examination portal for teachers, students and admin. Built using react and firebase</p>
                        <button className={styles.button}>Live Demo</button>
                        <button className={styles.button}>Source Code</button>
                        </div>
                <div className={styles.image}>Image placeholder</div>
                </div>
                
                
            </section>
        </>
    )
}

export default SectionThree;