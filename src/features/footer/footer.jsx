import styles from "../footer/footer.module.css";

function Footer() {
  return (
    <>
      <footer id="contact">
        <div className={styles.footer}>
          <div className={styles.heading}>Feel free to contact me</div>
          <div className={styles["footer-container"]}>
            <a
              href="https://www.linkedin.com/in/alhaan-ahmed-%F0%9F%87%B5%F0%9F%87%B8-199525296/"
              target="_blank"
            >
              <button id={styles.submitButton}>
                <i class="bi bi-linkedin"></i>
              </button>
            </a>
            <a
              href="https://www.reddit.com/user/alhaanonReddit/"
              target="_blank"
            >
              <button id={styles.submitButton}>
                <i class="bi bi-reddit"></i>
              </button>
            </a>
            <a
              href="mailto:alhaanahmed123@gmail.com"
              target="_blank"
            >
              <button id={styles.submitButton}>
                <i class="bi bi-envelope-at-fill"></i>
              </button>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
