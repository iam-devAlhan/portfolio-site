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
                    An E-Waste Management System for adding new e-waste
                    products, check in and check out feature, user and warehouse
                    registration. Built using Django.
                  </p>
                </div>
              </article>
              <article className={styles["card"]}>
                <img src="https://picsum.photos/400/250?1" alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Paidkaro Freelancing Job Platform Application</h3>
                  <p>
                    Freelancing Job Platform with all types of job listings, and
                    portfolio section with Posting feature such as Gigs to sell,
                    Built using Reactjs, Firebase, FastAPI and PostgresSQL.
                  </p>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src="https://picsum.photos/400/250?1" alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Sumitup - AI Meeting Assistant</h3>
                  <p>
                    Sumitup is an AI SaaS Meeting Assistant which not only
                    summarizes meeting but simplifies the meeting process, gives
                    clarity to users, Development in progress as Final Year
                    Project and a Future SaaS Product as a startup.
                  </p>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src="https://picsum.photos/400/250?1" alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Transport Help Desk AI Chatbot</h3>
                  <p>
                    A primary chatbot in a Slack Channel whose work is to
                    provide information related to People Bus Help Service
                    regarding routes, buses timings and fares. Built using Slack
                    Bolt SDK, Groq API for Chat Model and Scraped Website for
                    Information, RAG Pipeline in development.
                  </p>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src="https://picsum.photos/400/250?1" alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>TalentX-AI Assistant</h3>
                  <p>
                    An AI Powered Assistant which gives recommendations on Jobs,
                    Flag inappropriate internships, detect red flags. Built
                    using Streamlit for UI, FastAPI for API Endpoint, Vector
                    Search for RAG using MongoDB Atlas Vector Search
                  </p>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src="https://picsum.photos/400/250?1" alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Walmart Sales Analysis</h3>
                  <p>
                    Analyzed Walmart Sales from Kaggle Dataset, Described
                    different scenarios related to sales, affected sales due to
                    uemployment, monthly and daily sales and visualizations.
                    Build a Predictor for Walmart Sales affected by Unemployment
                    Rate to demonstrate how unemployment rate affect sales.
                  </p>
                  <div className={styles["card-button-container"]}>
                    <button className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </button>
                    <button className={styles["card-button-white"]}>
                      Live Link <i className="bi bi-globe"></i>
                    </button>
                  </div>
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
