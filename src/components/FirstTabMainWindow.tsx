import styles from "./styles/FirstTabMainWindow.module.css";

function FirstTabMainWindow() {
  return (
    <>
      <div className={styles.leftCol}>
        <img
          src={require("./styles/dummy-profile-pic.jpg")}
          className={styles.profileImage}
        />
        <p>j_fab@outlook.com</p>
        <p>(434)-270-9746</p>
        <p>github.com/jmf5pu</p>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.personalStatement}>
          <h1>Who am I?</h1>
          <p className={styles.indentedParagraph}>
            Hello! I'm Justin Fabrizio, and welcome to my portfolio site. I'm
            hoping this site will give you a quick snapshot of my life,
            interests, and experience as a software developer.
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
    </>
  );
}

export default FirstTabMainWindow;
