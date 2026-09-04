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
                  <div style={{fontWeight: "bold", color: "#ffff", margin: "5px 0"}}>Tech Stack: HTML, CSS, JS, Django</div>
                  <p>
                    An E-Waste Management System for managing e-waste items, checkin and checkout for items, revenue and sales graph, basic warehouse management.
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
                  <div style={{fontWeight: "bold", color: "#ffff", margin: "5px 0"}}>Tech Stack: Reactjs, FastAPI, PostgreSQL, Firebase Auth</div>
                  <p>
                    Freelancing Job Platform with all types of job listings, remote job listings, gigs and projects, clients', hiring managers', employers' and remote workers' platform that brings them together
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
                  <div style={{fontWeight: "bold", color: "#ffff", margin: "5px 0"}}>Tech Stack: Reactjs, FastAPI, MongoDB, LangChain, Docker</div>
                  <p>
                    An AI Meeting Intelligence Platform which visualizes whole meeting agenda alongside meeting summaries, joins as a bot to record meetings from Zoom, Google Meet and Teams
                    capturing action items and meeting summary. Multi-Tenant User Authentication and Chatbot Integrated that respond queries related to Meetings, Followup Generation etc
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
                  <div style={{fontWeight: "bold", color: "#ffff", margin: "5px 0"}}>Tech Stack: Streamlit, Python, MongoDB Atlas Vector Search</div>
                  <p>
                    RAG Chatbot which uses curated knowledge base from Reddit about scam internships, career recommendations for users entering new into job market. Used MongoDB Atlas Vector Search for Vector Storage and HuggingFace for Embedding Chunks.
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
                  <div style={{fontWeight: "bold", color: "#ffff", margin: "5px 0"}}>Tech Stack: Python, SQL, Google BigQuery</div>
                  <p>
                   Built a Python Script ETL Job which extracts job data, transforms for analysis and loads into BigQuery. Visual Analysis for Job Related Trends in a Tech Job Market.
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
                  <div style={{fontWeight: "bold", color: "#ffff", margin: "5px 0"}}>Tech Stack: Python, Kaggle, Scikit-Learn, Pandas, Numpy, Streamlit</div>
                  <p>
                    Built a Prediction Machine Learning Model that predicts sales according to unemployment rate on Walmart Sales Dataset. Acheived 96% of accuracy on Test Dataset Training with 4% mean absolute error. Deployed exported model using Streamlit for UI Interaction
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
