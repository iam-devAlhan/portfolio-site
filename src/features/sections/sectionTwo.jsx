import styles from "../sections/css/sectionTwo.module.css";
import htmlImage from "../../assets/317755_badge_html_html5_achievement_award_icon.svg";
import cssImage from "../../assets/4202020_css3_html_logo_social_social media_icon.svg";
import jsLogo from "../../assets/4373213_js_logo_logos_icon.svg";
import reactLogo from "../../assets/react.svg";
import firebaseLogo from "../../assets/icons8-firebase.svg";
import gitLogo from "../../assets/2993773_git_social media_icon.svg";
import mySqllogo from "../../assets/icons8-mysql-logo.svg";
import tsLogo from "../../assets/icons8-typescript.svg";
import pythonLogo from "../../assets/icons8-python.svg";
const SectionTwo = function () {
  const imgHeight = "50px";
  const imgWidth = "50px";

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
            <h1 className={styles.heading_01}>About Me + Tech Stack</h1>
            Hey, I’m Alhaan Ahmed — a self-taught Full Stack Developer with a
            deep passion for building meaningful products, solving real-world
            problems, and pushing the limits of what’s possible with code. I
            work primarily with React, Firebase, FastAPI, and MySQL, and
            recently I've been diving into AI/LLM integrations using tools like
            Groq API. I'm also mentoring others in Python and FastAPI, sharing
            what I learn as I grow.
          </div>
          <div
            className={styles.skills_section}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div id={styles.skill}>
              <img
                src={htmlImage}
                width={imgWidth}
                height={imgHeight}
                title="HTML"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={cssImage}
                width={imgWidth}
                height={imgHeight}
                title="CSS"
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
                src={firebaseLogo}
                width={imgWidth}
                height={imgHeight}
                title="Google Firebase"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={gitLogo}
                width={imgWidth}
                height={imgHeight}
                title="Git"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={tsLogo}
                width={imgWidth}
                height={imgHeight}
                title="Github"
              />
            </div>
            <div id={styles.skill}>
              <img
                src={mySqllogo}
                width={imgWidth}
                height={imgHeight}
                title="MySQL"
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
