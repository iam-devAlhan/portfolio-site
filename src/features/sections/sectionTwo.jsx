import styles from "../sections/css/sectionTwo.module.css";
import djangoImage from "../../assets/django-icon-svgrepo-com.svg";
import fastapiLogo from "../../assets/fastapi-svgrepo-com.svg";
import jsLogo from "../../assets/4373213_js_logo_logos_icon.svg";
import reactLogo from "../../assets/reactjs-svgrepo-com.svg";
import mongodbLogo from "../../assets/mongodb-svgrepo-com.svg";
import postgresSqllogo from "../../assets/postgresql-logo-svgrepo-com.svg";
import tsLogo from "../../assets/icons8-typescript.svg";
import pythonLogo from "../../assets/icons8-python.svg";

const SectionTwo = function () {
  const imgHeight = "48px";
  const imgWidth = "48px";

  return (
    <>
      <section className={styles.sectionTwo} id="about">
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              justifyContent: "center",
              width: "50%",
              flexDirection: "column",
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className={styles.heading_01}>About Myself</h1>
            <p>I am a Python Engineer with expertise in Python and other languages such as Javascript, Typescript and SQL. I have a mindset of system design and my skillset revolves around these frameworks + libraries and programming languages:</p>
          </div>
          <div
            className={styles.skills_section}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div id={styles.skill}>
              <img
                src={djangoImage}
                width={imgWidth}
                height={imgHeight}
                title="Django"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={fastapiLogo}
                width={imgWidth}
                height={imgHeight}
                title="FastAPI"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={jsLogo}
                width={imgWidth}
                height={imgHeight}
                title="Javascript"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={reactLogo}
                width={imgWidth}
                height={imgHeight}
                title="React.js"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={mongodbLogo}
                width={imgWidth}
                height={imgHeight}
                title="MongoDB"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={postgresSqllogo}
                width={imgWidth}
                height={imgHeight}
                title="PostgresSQL"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={tsLogo}
                width={imgWidth}
                height={imgHeight}
                title="Typescript"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={pythonLogo}
                width={imgWidth}
                height={imgHeight}
                title="Python"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
