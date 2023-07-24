import styles from "./styles/FirstTabMainWindow.module.css";
import {
  FaGithubSquare,
  FaLinkedin,
  FaPhoneSquare,
  FaMailBulk,
} from "react-icons/fa";

function FirstTabMainWindow() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftCol}>
        <img
          src={require("../images/profile.jpg")}
          className={styles.profileImage}
        />
        <div className={styles.contactInfo}>
          <a href="mailto:jmf5pu@virginia.edu">
            <FaMailBulk className={styles.socialIcon} />
          </a>
          <a href="tel:+14342709746">
            <FaPhoneSquare className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/jmf5pu"
            target="_blank"
            rel="noopener"
            aria-label="Github"
          >
            <FaGithubSquare className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/jf371a5/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={styles.socialIcon} />
          </a>
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.personalStatement}>
          <h1>Who am I?</h1>
          <p className={styles.indentedParagraph}>
            Hello! I'm Justin Fabrizio, and welcome to my portfolio site. I'm
            hoping this will give you a quick snapshot of my life, interests,
            and experience as a software developer.
          </p>
          <p className={styles.indentedParagraph}>
            Currently I'm a software engineer at AKASA, a bay area startup that
            is driving change in the healthcare/finance space through their
            machine-learning enhanced automation software. My alma mater is the
            University of Virginia, where I completed a Bachelor of Science in
            Computer Science while following a focal path in cybersecurity.
          </p>
          <p className={styles.indentedParagraph}>
            Outside of the office, I love spending time outdoors. As a
            Charlottesville native, I can frequently be found paddling on the
            Rivanna River and local reservoirs or hiking in the Blue Ridge
            Mountains just west of Albemarle County. My other hobbies include
            brazilian jiu jitsu, running, and fishing.
          </p>
          <p className={styles.indentedParagraph}>
            Thanks again for visiting my personal site. Whether you have
            feedback, inquiries, or exciting projects, always feel free to reach
            out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstTabMainWindow;
