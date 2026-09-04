import styles from "../sections/css/sectionTwo.module.css";
import djangoImage from "../../assets/django-icon-svgrepo-com.svg";
import fastapiLogo from "../../assets/png-transparent-fastapi-hd-logo-thumbnail.png";
import jsLogo from "../../assets/4373213_js_logo_logos_icon.svg";
import reactLogo from "../../assets/reactjs-svgrepo-com.svg";
import mongodbLogo from "../../assets/mongodb-svgrepo-com.svg";
import postgresSqllogo from "../../assets/postgresql-logo-svgrepo-com.svg";
import dockerLogo from "../../assets/docker-svgrepo-com.svg";
import azureLogo from "../../assets/azure-v2-svgrepo-com.svg";

const SectionTwo = function () {
  const imgHeight = "48px";
  const imgWidth = "48px";

  const experiences = [
    {
      role: "Python Developer",
      company: "Nexiatech",
      location: "Gulshan-e-Iqbal, Karachi",
      period: "29 Sept 2025 - 8 April 2026",
      tech: ["Python", "Django", "PHP", "Sentry"],
      achievements: [
        "Engineered OnPage Analytics & Monthly Backlink Report engine in Django for internal SEO management.",
        "Implemented OffPage Task Assignment Portal with seamless notification alerts for managers and team leads.",
        "Monitored production software for errors using Sentry for real-time logging.",
        "Impact: Reduced reliance on manual Excel sheets by 80% with a live dashboard for leadership.",
      ],
    },
  ];

  return (
    <section className={styles.sectionTwo} id="about">
      <div className={styles.container}>
        {/* Left Column: About & Skills */}
        <div
          className={styles.aboutContent}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className={styles.heading_01}>About Myself</h1>
          <p>
            I am a Full-Stack & AI Engineer specializing in building
            production-grade web applications, data pipelines, and intelligent
            AI tools. With a core focus on Python frameworks like Django and
            FastAPI, I build robust, scalable backends paired with modern React
            frontends. My work spans the intersection of software development
            and artificial intelligence—orchestrating Large Language Models
            (LLMs), building Retrieval-Augmented Generation (RAG) pipelines, and
            containerizing microservices with Docker for deployment on cloud
            environments like Azure. I focus on writing clean, maintainable code
            and turning technical concepts into high-impact, real-world
            solutions.
          </p>

          <div className={styles.skills_section}>
            <div className={styles.skill}>
              <img
                src={djangoImage}
                width={imgWidth}
                height={imgHeight}
                title="Django"
                alt="Django"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={fastapiLogo}
                width={imgWidth}
                height={imgHeight}
                title="FastAPI"
                alt="FastAPI"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={jsLogo}
                width={imgWidth}
                height={imgHeight}
                title="JavaScript"
                alt="JavaScript"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={reactLogo}
                width={imgWidth}
                height={imgHeight}
                title="React.js"
                alt="React"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={mongodbLogo}
                width={imgWidth}
                height={imgHeight}
                title="MongoDB"
                alt="MongoDB"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={postgresSqllogo}
                width={imgWidth}
                height={imgHeight}
                title="PostgreSQL"
                alt="PostgreSQL"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={dockerLogo}
                width={imgWidth}
                height={imgHeight}
                title="Docker"
                alt="Docker"
              />
            </div>
            <div className={styles.skill}>
              <img
                src={azureLogo}
                width={imgWidth}
                height={imgHeight}
                title="Azure"
                alt="Azure"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div
          className={styles.experienceSection}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className={styles.subHeading}>Experience</h2>

          <div className={styles.experienceList}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <h4 className={styles.companyName}>
                      {exp.company}{" "}
                      <span className={styles.location}>• {exp.location}</span>
                    </h4>
                  </div>
                  <span className={styles.periodBadge}>{exp.period}</span>
                </div>

                <div className={styles.techStack}>
                  {exp.tech.map((item, tIdx) => (
                    <span key={tIdx} className={styles.techTag}>
                      {item}
                    </span>
                  ))}
                </div>

                <ul className={styles.bulletList}>
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
