import styles from "../navbar/navbar.module.css";

const Navbar = function() {
    return (
        <>
        <header>
        <nav>
            <div className={styles.container}>
            <ul>
                <li className={styles["nav-link"]}>Portfolio</li>
                <li className={styles["nav-link"]}>Education</li>
                <li className={styles["nav-link"]}>Contact Me</li>
                <li className={styles["nav-link"]}>My Github Profile</li>
            </ul>
            </div>
            
        </nav>
        </header>
        </>
    )
    
}

export default Navbar;