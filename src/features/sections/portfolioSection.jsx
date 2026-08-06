import styles from "../sections/css/portfolioSection.module.css";
import projecttwo from "../../assets/freelancing_app_project.jpeg";
import ewasteproject from "../../assets/E-waste-1.png";
import sumitupproject from "../../assets/sumitup-ai.png";
import walmartsalesproject from "../../assets/walmart_sales_prediction.png";
import etlproject from "../../assets/etl-screenshot.png";

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
                <img src={ewasteproject} alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>E-Waste Management System</h3>
                  <p>
                    An E-Waste Management System for adding new e-waste
                    products, check in and check out feature, user and warehouse
                    registration. Built using Django.
                  </p>
                  <div className={styles["card-button-container"]}>
                    <a href="https://github.com/iam-devAlhan/E-Waste-Tracking-System" className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </a>
                    
                  </div>
                </div>
              </article>
              <article className={styles["card"]}>
                <img src={projecttwo} alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Paidkaro Freelancing Job Platform Application</h3>
                  <p>
                    Freelancing Job Platform with all types of job listings, and
                    portfolio section with Posting feature such as Gigs to sell,
                    Built using Reactjs, Firebase, FastAPI and PostgresSQL.
                  </p>
                  <div className={styles["card-button-container"]}>
                    <a href="https://github.com/iam-devAlhan/paidkaro-webapp" className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </a>
                    
                  </div>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src={sumitupproject} alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Sumitup - AI Meeting Assistant</h3>
                  <p>
                    Sumitup is an AI SaaS Meeting Assistant which not only
                    summarizes meeting but simplifies the meeting process, gives
                    clarity to users, Development in progress as Final Year
                    Project and a Future SaaS Product as a startup.
                  </p>
                  <div className={styles["card-button-container"]}>
                    <a href="https://github.com/SumitUp-AI/sumitup-ai-meet" className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </a>
                    
                  </div>
                </div>
              </article>

              <article className={styles["card"]}>
                <img  alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>TalentX-AI Assistant</h3>
                  <p>
                    An AI Powered Assistant which gives recommendations on Jobs,
                    Flag inappropriate internships, detect red flags. Built
                    using Streamlit for UI, FastAPI for API Endpoint, Vector
                    Search for RAG using MongoDB Atlas Vector Search
                  </p>
                  <div className={styles["card-button-container"]}>
                    <a href="https://github.com/iam-devAlhan/talentX-AI" className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </a>
                    
                  </div>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src={etlproject} alt="Card image" />
                <div className={styles["card-content"]}>
                  <h3>Karachi Jobs ETL Data Pipeline</h3>
                  <p>
                    A Data Pipeline with ETL process regarding analysis for Karachi Local Tech Jobs with Google BigQuery as Data Warehouse and Google Sheets for Analysis.
                  </p>
                  <div className={styles["card-button-container"]}>
                    <a href="https://github.com/iam-devAlhan/karachi-tech-jobs-etl-pipeline" className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </a>
                    
                  </div>
                </div>
              </article>

              <article className={styles["card"]}>
                <img src={walmartsalesproject} alt="Card image" />
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
                    <a href="https://github.com/iam-devAlhan/Walmart_Sales_Trends_Prediction" className={styles["card-button-black"]}>
                      View on Github <i className="bi bi-github"></i>
                    </a>
                    
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
