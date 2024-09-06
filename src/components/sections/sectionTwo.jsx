import styles from "../sections/css/sectionTwo.module.css";
import htmlImage from "../../assets/317755_badge_html_html5_achievement_award_icon.svg";
import cssImage from "../../assets/4202020_css3_html_logo_social_social media_icon.svg";
import jsLogo from "../../assets/4373213_js_logo_logos_icon.svg";
import reactLogo from "../../assets/react.svg";
import firebaseLogo from "../../assets/icons8-firebase.svg";
import gitLogo from "../../assets/2993773_git_social media_icon.svg";
import githubLogo from "../../assets/1298743_github_git_logo_social_icon.svg";

const SectionTwo = function() {

    const imgHeight = 90;
    const imgWidth = 90;


    return (
        <>
        <section className={styles.sectionTwo}>
            <h1 className={styles.heading_01}>Skills</h1>
            <div className={styles.skills_section}>
                <div id={styles.skill}><img src={htmlImage} width={imgWidth} height={imgHeight} title="HTML" /></div>
                <div id={styles.skill}><img src={cssImage} width={imgWidth} height={imgHeight} title="CSS"/></div>
                <div id={styles.skill}><img src={jsLogo} width={imgWidth} height={imgHeight} title="Javascript"/></div>
                <div id={styles.skill}><img src={reactLogo} width={imgWidth} height={imgHeight} title="React.js"/></div>
                <div id={styles.skill}><img src={firebaseLogo} width={imgWidth} height={imgHeight} title="Google Firebase"/></div>
                <div id={styles.skill}><img src={gitLogo} width={imgWidth} height={imgHeight} title="Git"/></div>
                <div id={styles.skill}><img src={githubLogo} width={imgWidth} height={imgHeight} title="Github"/></div>
            </div>
        </section>
        </>
    )

}

export default SectionTwo;