import arduinoImg from "../../assets/icons8-arduino.svg";
import expressImg from "../../assets/icons8-express-js.svg";
import mongodbImg from "../../assets/icons8-mongodb.svg";
import nodejsImg from "../../assets/icons8-nodejs.svg";
import mysqlImg from "../../assets/icons8-mysql-logo.svg";
import styles from "../sections/css/secfour.module.css";

const SectionFour = () => {

    const imgHeight = 90;
    const imgWidth = 90;

    return (
        <>
            <section className={styles.learningSection}>
            <h1 className={styles.heading}>My Learning</h1>
                <div className={styles.container}>
                    <div id={styles.item}><img src={arduinoImg} width={imgWidth} height={imgHeight} title="Arduino"/></div>
                    <div id={styles.item}><img src={expressImg} width={imgWidth} height={imgHeight} title="Express.js"/></div>
                    <div id={styles.item}><img src={mongodbImg} width={imgWidth} height={imgHeight} title="MongoDB"/></div>
                    <div id={styles.item}><img src={nodejsImg} width={imgWidth} height={imgHeight} title="NodeJS"/></div>
                    <div id={styles.item}><img src={mysqlImg} width={imgWidth} height={imgHeight} title="MySQL"/></div>
                </div>

            </section>
        </>
    )
}

export default SectionFour;