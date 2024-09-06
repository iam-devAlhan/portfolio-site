import styles from "../footer/footer.module.css";

function Footer() {
    return (
        <>
        <footer>
            <div className={styles.footer}>
                <h1 className={styles.heading}>Contact Me</h1>
                <input id={styles.userinput} placeholder="Your name" />
                <input id={styles.emailinput} type="email" placeholder="Email Address" />
                <input id={styles.msginput} type="text" placeholder="Your Message" />
                <button id={styles.submitButton}>Submit</button>
            </div>
        </footer>
        </>
    )
}

export default Footer;