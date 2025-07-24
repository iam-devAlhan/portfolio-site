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
          <div id={styles.projectContainer}>
            <h2>PaidKaro - Fiverr / Upwork Clone</h2>
            <p>
              Freelancing Clone having basic features of freelancing websites -
              Built using React and FastAPI - Database MySQL
            </p>
            <a
              href="https://www.github.com/iam-devAlhan/paidkaro-webapp"
              target="_blank"
            >
              <button className={styles.button}>
                Source Code <i className="bi bi-code"></i>
              </button>
            </a>
          </div>
          <div>
            <img className={styles.image} src={projectone} alt="placeholder" />
          </div>
        </div>
        <div
          className={styles.container2}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div id={styles.projectContainer}>
            <h2>EComAgent - WhatsApp AI Assistant - Hackathon Project</h2>
            <p>
              An Ecommerce AI Assistant which acts as a Customer Service
              Representative for your Shopify Store. Built using FastAPI by
              integrating Twilio WhatsApp API, Llama 3 via Groq API and cleaned
              Shopify Products json for fine tuning model
            </p>
            <a
              href="https://www.github.com/iam-devAlhan/csr_ecom_ai_agent"
              target="_blank"
            >
              <button className={styles.button}>
                Source Code <i className="bi bi-code"></i>
              </button>
            </a>
          </div>
          <div>
            <img className={styles.image} src={projecttwo} alt="placeholder" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
