import styles from "../sections/css/portfolioSection.module.css";
import projectone from "../../assets/freelancing_app_project.jpeg";
import projecttwo from "../../assets/ai_assistant_project.png";

const SectionThree = function () {
  return (
    <>
      <section className={styles.container} id="portfolio">
        <h1 className={styles.mainHeading}>Portfolio / Projects</h1>
        <div
          className={styles.container2}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
        <div>
          <div className={styles["card-grid"]}>
            <article className={styles["card"]}>
              <img src="https://picsum.photos/400/250?1" alt="Card image" />
              <div className={styles["card-content"]}>
                <h3>E-Waste Management System</h3>
                <p>
                  This is a short description. Keep it concise, readable, and slightly ambitious.
                </p>
              </div>
            </article>
            <article className={styles["card"]}>
              <img src="https://picsum.photos/400/250?1" alt="Card image" />
              <div className={styles["card-content"]}>
                <h3>Card Title</h3>
                <p>
                  This is a short description. Keep it concise, readable, and slightly ambitious.
                </p>
              </div>
            </article>

            <article className={styles["card"]}>
              <img src="https://picsum.photos/400/250?1" alt="Card image" />
              <div className={styles["card-content"]}>
                <h3>Card Title</h3>
                <p>
                  This is a short description. Keep it concise, readable, and slightly ambitious.
                </p>
              </div>
            </article>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
