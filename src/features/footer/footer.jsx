import styles from "../footer/footer.module.css";
import pathToCv from "../../assets/Alhaan-Ahmed-Resume.pdf";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Opens user's default mail app targeting your email
    window.location.href = `mailto:alhaanahmed123@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact">
      <div className={styles.footer}>
        <div className={styles.heading}>Feel free to contact me</div>
        
        <form onSubmit={handleSubmit} className={styles["footer-container"]}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className={styles.inputField}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className={styles.inputField}
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="4" 
            className={styles.inputField}
            required 
          />
          
          <div className={styles.buttonGroup}>
            <button type="submit" id={styles.submitButton}>
              <i className="bi bi-send-fill"></i> Send Message
            </button>
            <a 
              href={pathToCv} 
              download="AlhaanAhmed_CV.pdf" 
              className={styles.downloadButton}
            >
              <i className="bi bi-file-earmark-arrow-down-fill"></i> Download CV
            </a>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;