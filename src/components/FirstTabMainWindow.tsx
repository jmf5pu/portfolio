import styles from "./styles/FirstTabMainWindow.module.css";

function FirstTabMainWindow() {
  return (
    <>
      <img
        src={require("./styles/dummy-profile-pic.jpg")}
        className={styles.profileImage}
      />
      <p>first tab main window</p>
    </>
  );
}

export default FirstTabMainWindow;
